import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class VideoResourcePlayer implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _videoUrl: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._container = container;
    this._videoUrl = context.parameters.videoUrl.raw || "https://www.youtube.com/embed/dQw4w9WgXcQ";
    this.renderControl();
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    const newUrl = context.parameters.videoUrl.raw || "https://www.youtube.com/embed/dQw4w9WgXcQ";
    if (this._videoUrl !== newUrl) {
      this._videoUrl = newUrl;
      this.renderControl();
    }
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.aspectRatio = "16 / 9";
    wrapper.style.borderRadius = "12px";
    wrapper.style.overflow = "hidden";
    wrapper.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    wrapper.style.backgroundColor = "#000";

    const iframe = document.createElement("iframe");
    iframe.src = this._videoUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.allowFullscreen = true;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    wrapper.appendChild(iframe);
    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
