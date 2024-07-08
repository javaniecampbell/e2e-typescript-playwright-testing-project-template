# E2E Testing Project with Cucumber.js and Playwright

This project implements end-to-end (e2e) testing using Cucumber.js for behavior-driven development (BDD) and Playwright for browser automation. It provides a robust framework for writing and executing e2e tests in a clear, expressive manner.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Configuration](#configuration)
5. [Writing Tests](#writing-tests)
6. [Running Tests](#running-tests)
7. [CI/CD Integration](#cicd-integration)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)
11. [License](#license)

## Prerequisites

- Node.js (version 14 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/javaniecampbell/e2e-typescript-playwright-testing-project-template.git
   cd e2e-typescript-playwright-testing-project-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install Playwright browsers:
   ```
   npx playwright install
   ```

## Project Structure

```
.
├── src
│   ├── features
│   │   └── *.feature
│   ├── step-definitions
│   │   └── *.steps.ts
│   ├── support
│   │   ├── custom-world.ts
│   │   ├── hooks.ts
│   │   └── run.ts
│   └── page-objects
│       └── *.page.ts
├── config
│   ├── index.ts
│   └── reporter.js
├── playwright.config.ts
├── cucumber.js
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration

### Cucumber.js Configuration

The Cucumber.js configuration is located in `cucumber.js`. It specifies the test directory, required files, and other Cucumber-specific options.

### Playwright Configuration

Playwright is configured in `playwright.config.ts`. This file sets up browser options, viewport sizes, and other Playwright-specific settings.

### TypeScript Configuration

TypeScript is configured in `tsconfig.json`. Ensure this file is set up correctly for your project needs.

## Writing Tests

1. Create feature files in the `src/features` directory using Gherkin syntax.
2. Implement step definitions in the `src/step-definitions` directory.
3. Use page objects from the `src/page-objects` directory in your step definitions for better organization.

Example feature file (`src/features/login.feature`):
```gherkin
Feature: User Login

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the dashboard
```

Example step definition (`src/step-definitions/login.steps.ts`):
```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../page-objects/login.page';
import { CustomWorld } from '../support/custom-world';

Given('I am on the login page', async function(this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

// ... more step definitions
```

## Running Tests

To run all tests:
```
npm run test:e2e
```

To run specific tags:
```
npm run test:e2e -- --tags @smoke
```

## CI/CD Integration

This project includes GitHub Actions workflows for continuous integration. The workflow file is located at `.github/workflows/e2e-workflow.yml`.

For other CI/CD platforms, adapt the GitHub Actions workflow to your specific platform's syntax and requirements.

## Best Practices

1. Keep features focused and scenarios atomic.
2. Use tags to organize and selectively run tests.
3. Implement hooks for setup and teardown in `src/support/setup.ts`.
4. Use environment variables for configuration.
5. Regularly update dependencies.
6. Implement retry logic for flaky tests.
7. Use data-testid attributes for element selection.

## Troubleshooting

If you encounter issues:

1. Ensure all dependencies are installed correctly.
2. Check that Playwright browsers are installed.
3. Verify that your application under test is running and accessible.
4. Review the Cucumber and Playwright documentation for specific issues.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write tests for your changes.
4. Ensure all tests pass.
5. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
