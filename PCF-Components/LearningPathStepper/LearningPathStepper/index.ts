import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class LearningPathStepper implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _currentStage: number;
  private _stageNames: string[];
  private _notifyOutputChanged: () => void;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._container = container;
    this._notifyOutputChanged = notifyOutputChanged;
    this.updateData(context);
    this.renderControl();
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this.updateData(context);
    this.renderControl();
  }

  private updateData(context: ComponentFramework.Context<IInputs>) {
    this._currentStage = context.parameters.currentStage.raw || 1;
    const namesStr = context.parameters.stageNames.raw || "Module 1,Module 2,Module 3";
    this._stageNames = namesStr.split(",").map(s => s.trim());
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.width = "100%";
    wrapper.style.padding = "20px 0";
    wrapper.style.fontFamily = "Segoe UI, sans-serif";

    this._stageNames.forEach((name, index) => {
      const stepNum = index + 1;
      const isCompleted = stepNum < this._currentStage;
      const isActive = stepNum === this._currentStage;

      const stepContainer = document.createElement("div");
      stepContainer.style.display = "flex";
      stepContainer.style.flexDirection = "column";
      stepContainer.style.alignItems = "center";
      stepContainer.style.flex = "1";
      stepContainer.style.position = "relative";
      stepContainer.style.cursor = "pointer";

      const circle = document.createElement("div");
      circle.style.width = "32px";
      circle.style.height = "32px";
      circle.style.borderRadius = "50%";
      circle.style.display = "flex";
      circle.style.alignItems = "center";
      circle.style.justifyContent = "center";
      circle.style.fontWeight = "bold";
      circle.style.zIndex = "1";
      circle.style.transition = "all 0.3s";
      circle.style.border = "2px solid";

      if (isCompleted) {
        circle.style.backgroundColor = "#22c55e"; // Green
        circle.style.borderColor = "#22c55e";
        circle.style.color = "white";
        circle.innerHTML = "✓";
      } else if (isActive) {
        circle.style.backgroundColor = "white";
        circle.style.borderColor = "#4f46e5"; // Indigo
        circle.style.color = "#4f46e5";
        circle.innerHTML = stepNum.toString();
        circle.style.boxShadow = "0 0 0 4px rgba(79, 70, 229, 0.2)";
      } else {
        circle.style.backgroundColor = "white";
        circle.style.borderColor = "#cbd5e1"; // Slate 300
        circle.style.color = "#94a3b8"; // Slate 400
        circle.innerHTML = stepNum.toString();
      }

      const label = document.createElement("div");
      label.innerText = name;
      label.style.marginTop = "8px";
      label.style.fontSize = "12px";
      label.style.fontWeight = isActive || isCompleted ? "600" : "400";
      label.style.color = isActive ? "#4f46e5" : isCompleted ? "#334155" : "#94a3b8";
      label.style.textAlign = "center";

      stepContainer.appendChild(circle);
      stepContainer.appendChild(label);

      stepContainer.addEventListener("click", () => {
        this._currentStage = stepNum;
        this._notifyOutputChanged();
      });

      wrapper.appendChild(stepContainer);

      if (index < this._stageNames.length - 1) {
        const line = document.createElement("div");
        line.style.flex = "1";
        line.style.height = "2px";
        line.style.marginTop = "-24px"; // Align with circle center
        line.style.backgroundColor = isCompleted ? "#22c55e" : "#e2e8f0";
        line.style.transition = "background-color 0.3s";
        wrapper.appendChild(line);
      }
    });

    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {
      currentStage: this._currentStage
    };
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
