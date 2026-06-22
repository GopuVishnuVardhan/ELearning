# Course Progress Bar PCF

## Business Case
In an eLearning application built on Power Apps or Power Pages, tracking student progress is essential. However, the standard Dataverse whole number field only displays a plain integer (e.g., "75"). This component transforms that integer into a beautiful, dynamic progress bar, providing immediate visual feedback to the learner.

## Pros and Cons
**Pros:**
- Provides a much better user experience than a plain text field.
- Animated transition makes progress updates feel rewarding.
- No code required by the app maker; simply bind it to a Whole Number column.

**Cons:**
- Only supports integers (0-100), not decimals.
- Hardcoded colors (requires modifying the code to match custom themes).

## Comparison: PCF vs JavaScript Web Resources
- **JavaScript Web Resource**: You would have to inject DOM elements into the form, which is unsupported and fragile in Unified Interface.
- **PCF (This approach)**: Fully supported by Microsoft. The control natively replaces the input field and seamlessly integrates into the component lifecycle.
