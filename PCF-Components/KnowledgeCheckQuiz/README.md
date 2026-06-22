# Knowledge Check Quiz PCF

## Business Case
Frequent low-stakes assessments improve learning retention. This component allows you to present a multiple-choice question directly inside a Dataverse form or Power Pages site. It provides instant visual feedback (green for correct, red for incorrect) without requiring a form save.

## Pros and Cons
**Pros:**
- Immediate feedback keeps learners engaged.
- Handles UI state (selected vs submitted) internally.
- Clean, modern UI styling.

**Cons:**
- Limited to exactly 4 options per question.
- Does not persist the user's score to Dataverse automatically (it's purely a visual component unless wired to an output property, which isn't currently implemented).

## Comparison: Canvas App vs PCF
- **Canvas App**: You could build a quiz easily in a Canvas App, but embedding that Canvas App inside a Model-Driven App form is heavy and loads slowly.
- **PCF (This approach)**: Loads instantly within the Model-Driven App form. It acts exactly like a native field, providing a much faster and more seamless experience.
