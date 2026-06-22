# Flashcard Viewer PCF

## Business Case
Flashcards are a proven studying technique. In a Power Apps training module, you want learners to memorize key terms. This component binds to two text fields (Front and Back) and renders them as a 3D flip card that animates when clicked.

## Pros and Cons
**Pros:**
- Highly engaging and interactive for end-users.
- 3D CSS transforms give a premium app feel.
- Fully self-contained.

**Cons:**
- Only supports plain text (does not support rich HTML or images on the flashcard without modifying the code).
- Fixed height of 200px.

## Comparison: PCF vs JavaScript Web Resources
- **JavaScript Web Resource**: Animating elements via JS Web Resources in model-driven apps is difficult because custom CSS injection is officially unsupported.
- **PCF (This approach)**: PCF allows encapsulation of CSS and logic. The 3D transforms are safely scoped to the component's container without affecting the rest of the form.
