import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class CourseProgressBar implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _value: number;
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
    this._value = context.parameters.progress.raw || 0;
    this.renderControl();
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this._value = context.parameters.progress.raw || 0;
    this.renderControl();
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.fontFamily = "Segoe UI, sans-serif";

    const labelContainer = document.createElement("div");
    labelContainer.style.display = "flex";
    labelContainer.style.justifyContent = "space-between";
    labelContainer.style.marginBottom = "4px";
    labelContainer.style.fontSize = "14px";
    labelContainer.style.fontWeight = "600";
    labelContainer.style.color = "#333";

    const title = document.createElement("span");
    title.innerText = "Course Completion";
    
    const percent = document.createElement("span");
    percent.innerText = `${this._value}%`;
    percent.style.color = "#4f46e5"; // Indigo 600

    labelContainer.appendChild(title);
    labelContainer.appendChild(percent);

    const track = document.createElement("div");
    track.style.width = "100%";
    track.style.height = "12px";
    track.style.backgroundColor = "#e2e8f0"; // Slate 200
    track.style.borderRadius = "6px";
    track.style.overflow = "hidden";

    const bar = document.createElement("div");
    bar.style.height = "100%";
    bar.style.width = `${Math.min(Math.max(this._value, 0), 100)}%`;
    bar.style.backgroundColor = "#4f46e5"; // Indigo 600
    bar.style.borderRadius = "6px";
    bar.style.transition = "width 0.4s ease-in-out";

    track.appendChild(bar);
    wrapper.appendChild(labelContainer);
    wrapper.appendChild(track);
    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {
      progress: this._value
    };
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
