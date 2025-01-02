# Profile Creator - Next.js Project

This project allows users to create their profiles by submitting a form with various fields. The form includes validation for password strength, email format, and missing fields. This application is built using Next.js.

## Project Overview

The Profile Creator project aims to provide a single form for users to input their profile details and validate the password based on the specified policies. The application will display user-friendly error messages when the form fails validation. No backend integration is required, focusing on client-side validation and form handling.

---

## Installation Instructions

1. **Clone the Repository:**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone <repository-url>

2. **Install Dependencies:**

   Make sure you have Node.js (version 14.x or later) installed. Install the project dependencies using:

   ```bash
   npm install
   # or
   npm install
   # or
   yarn install
   # or
   pnpm install

3. **Run the Development Server:**

   After installing the dependencies, run the development server using:

      ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev

4. **Unit Testing:**

   The project includes unit tests using Jest and React Testing Library to ensure that the form and password validation work as expected:

      ```bash
   npx jest --watch
   # or
   npx jest
   # or
   npm run test
   # or
   yarn test
   # or
   pnpm test

5. **Project Structure:**
```python
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




