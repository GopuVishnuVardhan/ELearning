# ELearning Repository

This repository contains tools and components for building a comprehensive eLearning experience in Microsoft Power Platform.

## Contents
1. **[MS Cert Hub App](./MS-Cert-Hub-App)**: A React web application simulating an eLearning portal (built with Vite + Tailwind CSS).
2. **[PCF Components](./PCF-Components)**: 5 custom Power Apps Component Framework (PCF) controls designed specifically for eLearning and training scenarios in Dataverse and Power Pages.

### PCF Components Included:
- **CourseProgressBar**: A visual completion tracker.
- **FlashcardViewer**: An interactive flip-card for studying definitions.
- **KnowledgeCheckQuiz**: A multiple-choice assessment component.
- **LearningPathStepper**: A wizard-like stage tracker for learning paths.
- **VideoResourcePlayer**: An embedded video player for training materials.

Each PCF component contains its source code and a pre-packaged **unmanaged solution ZIP file** that you can import directly into your Power Platform environment!

## Deployment
- **Web App**: See the `README.md` inside `MS-Cert-Hub-App` for `npm run dev` instructions.
- **PCF Controls**: Navigate to any component folder, locate the `GVV<ComponentName>_1_0_0_0.zip` file, and import it via the Power Apps Maker Portal (make.powerapps.com).
