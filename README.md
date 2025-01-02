# Profile Creator - Next.js Project

This project allows users to create their profiles by submitting a form with various fields. The form includes validation for password strength, email format, and missing fields. This application is built using Next.js.

## Project Overview

The Profile Creator project aims to provide a single form for users to input their profile details and validate the password based on the specified policies. The application will display user-friendly error messages when the form fails validation. No backend integration is required, focusing on client-side validation and form handling.

## Functional Requirements

### 1. Form Fields

The form includes the following input fields:

- **Name**: (Required, String)
- **Email**: (Required, Must be a valid email address format)
- **Phone**: (Optional, Numeric)
- **Password**: (Required, String, Must meet password policy)

### 2. Password Policy Validation

The password must meet the following requirements:

- Must be at least 8 characters long.
- Must contain at least one uppercase letter (A-Z).
- Must contain at least one lowercase letter (a-z).
- Must include at least one numeric digit (0-9).
- Must include at least one special character (e.g., @, #, $, %, etc.).

### 3. Validation and Error Messages

- If any required field is empty (excluding Phone), an error message will display, specifying the missing field.
- If the password does not meet the policy requirements, an error message will list the violated policies.
- If the email format is invalid, an error message will be displayed.

### 4. Form Submission

- On successful validation, the form will display a confirmation message: "Profile successfully created!"
- Note: No backend integration is required for this project; it focuses on client-side validation and form handling.

---

## Installation Instructions

1. **Clone the Repository:**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone <repository-url>

2. **Install Dependencies:**

npm install
# or
yarn install
# or
pnpm install


3. **Run the Development Server:**

npm run dev
# or
yarn dev
# or
pnpm dev

Open http://localhost:3000 in your browser to see the application in action.

## Unit Testing

The project includes unit tests using Jest and React Testing Library to ensure that the form and password validation work as expected.

Running Tests
To run the tests, use the following command:

npx jest --watch
# or
npx jest 
# or
npm run test
# or
yarn test
# or
pnpm test



## Project Structure

profile-creator/
├── src/                  # Source code directory
│   ├── pages/            # Pages directory (e.g., Home Page with Profile Creation Form)
│   │   └── index.tsx     # Home page with the profile creation form
│   ├── components/       # Reusable React components (e.g., Input Fields)
│   │   └── FormInput.tsx # Reusable form input component
│   ├── styles/           # Styles directory
│   │   └── globals.css   # Tailwind CSS configuration and global styles
│   ├── utils/            # Utility functions (e.g., Validation Logic)
│   │   └── validation.ts # Password validation logic
├── __tests__/            # Unit tests for form validation
│   └── FormValidation.test.ts # Unit tests for form and password validation
