# Video Resource Player PCF

## Business Case
Training modules often rely on video content. Instead of asking learners to click a URL and open a new tab (which breaks their focus), this component renders an embedded video player (e.g. YouTube, Vimeo) directly inline on the record form.

## Pros and Cons
**Pros:**
- Keeps learners on the platform, increasing engagement.
- Dynamically bounds to a text field containing the video URL.

**Cons:**
- Requires external URLs to permit embedding (e.g., `youtube.com/embed/...`).
- Relies on an `iframe`, so corporate firewalls blocking video sites will still block the video.

## Comparison: PCF vs JavaScript Web Resources
- **JavaScript Web Resource**: You would need to add an HTML web resource to the form and pass parameters to it via JS, which is clunky and requires two separate web resources (HTML + JS).
- **PCF (This approach)**: A single, neat component that acts exactly like a native field.
