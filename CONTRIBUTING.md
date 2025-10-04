# Contributing

Thank you for your interest in contributing to Myogi!

## How to Contribute

### Reporting Issues

1. Check the [issue tracker](https://github.com/madebylucke/myogi/issues) to see if your bug or feature request has already been reported.

2. If you find an existing issue, verify if the problem still occurs on the latest `main` branch, which contains the most up-to-date code.

3. If the issue is new, open a report with:
   - A clear, descriptive title
   - Detailed reproduction steps (for bugs)
   - Any relevant screenshots, logs, or context

### Code Contributions

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or fix:

   `git checkout -b feature/your-feature-name`

3. Write clear, maintainable code. Follow our [Coding Standards](#coding-standards)

4. Include tests for new features or bug fixes where applicable.

5. Run all tests locally to ensure nothing breaks.

6. Commit your changes with clear, concise messages:

   `git commit -m "Add brief description of your change"`

7. Push your branch to your fork:

   `git push origin feature/your-feature-name`

8. Open a Pull Request to the main repository, filling it out with:

   - Description of the change
   - Motivation and context
   - Steps to test the change
   - Additional notes, if any

### Code Review

- Be responsive and constructive in addressing review comments.
- Iterate on your PR until approval and merging.

### Coding Standards

- Language & Style

  - The project uses TypeScript with strict mode enabled (enforced via `tsconfig.json`).
  - Code must pass ESLint and be formatted with Prettier.
  - Follow React/React Native best practices (functional components, hooks, small reusable components).

- Naming
  - Components: `PascalCase` (`WorkoutCard.tsx`)
  - Hooks: `useSomething` (`useAuth.ts`)
  - Variables & functions: `camelCase`
  - Constants & enums: `UPPER_CASE`

## Community Standards

We are committed to maintaining an **inclusive, respectful,** and **collaborative** environment.

## Why Contribute?

By contributing to Myogi, you join a community dedicated to building a powerful, open-source fitness platform that empowers people worldwide. Your contributions help accelerate innovation and community growth.

---

Thank you for helping make Myogi better!

_The Myogi Team_
