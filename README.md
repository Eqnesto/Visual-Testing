# Visual Testing

This repository contains automated visual tests for the ACME Bank demo application using Playwright's native screenshot comparison. It enforces the consistency of the user interface across different browsers and screen sizes by comparing current snapshots against approved baselines.

## 🔧 How to Run

1.  Clone repository:
    ```shell
    git clone https://github.com/Eqnesto/Visual-Testing
    ```
2.  Install dependencies:
    ```bash
    npm install
    npx playwright install
    ```
3.  Setup the initial screenshots baselines:
    ```bash
    npm run test:update:screenshots
    ```
4.  Run tests and automatically open the HTML report for review:
    ```bash
    npm run test:visual:all
    ```
5.  When a visual test fails, the HTML report will display the **Expected**, **Actual**, and **Diff** images highlighting the pixel discrepancies.

## 📄 Test Cases

| Test Case | Description | Snapshot Name |
| :--- | :--- | :--- |
| **Login Page Check** | Verifies the initial load and appearance of the login form, logo, and fields. | `login-page.png` |
| **Main Page Check** | Verifies the dashboard after successful login, including the account summary, navigation menus, and transaction tables. | `main-page.png` |

## ⚙️ Configuration Details

| Setting | Value | Purpose |
| :--- | :--- | :--- |
| **`maxDiffPixels`** | `50` | Maximum number of different pixels allowed before a test fails. |
| **`threshold`** | `0.5` | Maximum percentage difference (0.5%) allowed between images before failure. |
| **`trace`** | `on` | Enables Playwright tracing to capture detailed step-by-step screenshots for debugging purposes. |
| **`size`** | `1280 x 720` | Tests are executed using the default browser viewport size. |