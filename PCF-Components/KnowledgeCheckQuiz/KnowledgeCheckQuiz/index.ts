import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class KnowledgeCheckQuiz implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _question: string;
  private _options: string[];
  private _correctOption: number;
  private _selectedOption: number | null = null;
  private _isSubmitted = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._container = container;
    this.updateData(context);
    this.renderControl();
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this.updateData(context);
    this.renderControl();
  }

  private updateData(context: ComponentFramework.Context<IInputs>) {
    this._question = context.parameters.question.raw || "What is a PCF?";
    this._options = [
      context.parameters.option1.raw || "Option 1",
      context.parameters.option2.raw || "Option 2",
      context.parameters.option3.raw || "Option 3",
      context.parameters.option4.raw || "Option 4"
    ];
    this._correctOption = context.parameters.correctOption.raw || 1;
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.fontFamily = "Segoe UI, sans-serif";
    wrapper.style.padding = "20px";
    wrapper.style.border = "1px solid #e2e8f0";
    wrapper.style.borderRadius = "12px";
    wrapper.style.backgroundColor = "#ffffff";
    wrapper.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";

    const title = document.createElement("h3");
    title.innerText = "Knowledge Check";
    title.style.margin = "0 0 12px 0";
    title.style.color = "#4f46e5";

    const questionText = document.createElement("p");
    questionText.innerText = this._question;
    questionText.style.fontSize = "16px";
    questionText.style.fontWeight = "600";
    questionText.style.marginBottom = "16px";

    wrapper.appendChild(title);
    wrapper.appendChild(questionText);

    const optionsContainer = document.createElement("div");
    optionsContainer.style.display = "flex";
    optionsContainer.style.flexDirection = "column";
    optionsContainer.style.gap = "8px";

    this._options.forEach((optText, index) => {
      const optionNum = index + 1;
      const btn = document.createElement("button");
      btn.innerText = optText;
      btn.style.padding = "10px 16px";
      btn.style.borderRadius = "8px";
      btn.style.border = "1px solid #cbd5e1";
      btn.style.backgroundColor = "#f8fafc";
      btn.style.textAlign = "left";
      btn.style.cursor = "pointer";
      btn.style.transition = "all 0.2s";

      if (this._isSubmitted) {
        btn.disabled = true;
        if (optionNum === this._correctOption) {
          btn.style.backgroundColor = "#dcfce7";
          btn.style.borderColor = "#22c55e";
          btn.style.color = "#166534";
        } else if (this._selectedOption === optionNum) {
          btn.style.backgroundColor = "#fee2e2";
          btn.style.borderColor = "#ef4444";
          btn.style.color = "#991b1b";
        }
      } else {
        if (this._selectedOption === optionNum) {
          btn.style.backgroundColor = "#e0e7ff";
          btn.style.borderColor = "#4f46e5";
        }
        btn.addEventListener("click", () => {
          this._selectedOption = optionNum;
          this.renderControl();
        });
        btn.addEventListener("mouseover", () => {
          if (this._selectedOption !== optionNum) btn.style.backgroundColor = "#f1f5f9";
        });
        btn.addEventListener("mouseout", () => {
          if (this._selectedOption !== optionNum) btn.style.backgroundColor = "#f8fafc";
        });
      }

      optionsContainer.appendChild(btn);
    });

    wrapper.appendChild(optionsContainer);

    if (!this._isSubmitted) {
      const submitBtn = document.createElement("button");
      submitBtn.innerText = "Check Answer";
      submitBtn.style.marginTop = "16px";
      submitBtn.style.padding = "10px 20px";
      submitBtn.style.backgroundColor = "#4f46e5";
      submitBtn.style.color = "white";
      submitBtn.style.border = "none";
      submitBtn.style.borderRadius = "8px";
      submitBtn.style.cursor = "pointer";
      submitBtn.style.fontWeight = "600";
      submitBtn.disabled = this._selectedOption === null;
      if (submitBtn.disabled) {
        submitBtn.style.opacity = "0.5";
        submitBtn.style.cursor = "not-allowed";
      }

      submitBtn.addEventListener("click", () => {
        if (this._selectedOption !== null) {
          this._isSubmitted = true;
          this.renderControl();
        }
      });
      wrapper.appendChild(submitBtn);
    } else {
      const feedback = document.createElement("p");
      feedback.style.marginTop = "16px";
      feedback.style.fontWeight = "bold";
      feedback.innerText = this._selectedOption === this._correctOption ? "🎉 Correct!" : "❌ Incorrect. Keep studying!";
      feedback.style.color = this._selectedOption === this._correctOption ? "#166534" : "#991b1b";
      wrapper.appendChild(feedback);
    }

    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
