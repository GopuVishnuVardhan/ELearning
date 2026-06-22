import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class FlashcardViewer implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _frontText: string;
  private _backText: string;
  private _isFlipped: boolean = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._container = container;
    this._frontText = context.parameters.frontText.raw || "Front Text";
    this._backText = context.parameters.backText.raw || "Back Text";
    this.renderControl();
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this._frontText = context.parameters.frontText.raw || "Front Text";
    this._backText = context.parameters.backText.raw || "Back Text";
    this.renderControl();
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.height = "200px";
    wrapper.style.perspective = "1000px";
    wrapper.style.fontFamily = "Segoe UI, sans-serif";
    wrapper.style.cursor = "pointer";

    const inner = document.createElement("div");
    inner.style.position = "relative";
    inner.style.width = "100%";
    inner.style.height = "100%";
    inner.style.textAlign = "center";
    inner.style.transition = "transform 0.6s";
    inner.style.transformStyle = "preserve-3d";
    
    if (this._isFlipped) {
      inner.style.transform = "rotateY(180deg)";
    }

    const baseFaceStyle = `
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 20px;
      box-sizing: border-box;
      font-size: 18px;
    `;

    const front = document.createElement("div");
    front.style.cssText = baseFaceStyle;
    front.style.backgroundColor = "#ffffff";
    front.style.color = "#1e293b";
    front.style.border = "2px solid #e2e8f0";
    front.style.fontWeight = "600";
    front.innerText = this._frontText;

    const back = document.createElement("div");
    back.style.cssText = baseFaceStyle;
    back.style.backgroundColor = "#4f46e5";
    back.style.color = "#ffffff";
    back.style.transform = "rotateY(180deg)";
    back.innerText = this._backText;

    inner.appendChild(front);
    inner.appendChild(back);
    wrapper.appendChild(inner);
    
    wrapper.addEventListener("click", () => {
      this._isFlipped = !this._isFlipped;
      inner.style.transform = this._isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
    });

    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
