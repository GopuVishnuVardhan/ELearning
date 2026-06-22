# Learning Path Stepper PCF

## Business Case
When guiding a learner through a multi-stage curriculum, displaying their current phase helps set expectations and track progress. This component visually renders a wizard-like "stepper" showing completed, active, and future modules.

## Pros and Cons
**Pros:**
- Provides a clean, modern "wizard" navigation UI.
- Dynamically configures itself based on a comma-separated list of stage names.
- Updates the bound integer field when a stage is clicked.

**Cons:**
- Custom styling requires code modifications.
- Not suited for paths with a massive number of stages (horizontal space constraints).

## Comparison: PCF vs Out-of-the-Box Business Process Flow (BPF)
- **BPF**: Best for rigid business data processes. Visually heavy and takes up significant screen real estate.
- **PCF (This approach)**: Lightweight, customizable, and perfectly suited for custom eLearning portals where a BPF is overkill or visually inappropriate.
