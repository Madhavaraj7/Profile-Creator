export default function validatePassword(password: string): string[] {
    const errors: string[] = [];
  
    if (password.length < 8) {
      errors.push("Must be at least 8 characters long.");
    }
  
    if (!/[A-Z]/.test(password)) {
      errors.push("Must contain at least one uppercase letter.");
    }
  
    if (!/[a-z]/.test(password)) {
      errors.push("Must contain at least one lowercase letter.");
    }
  
    if (!/[0-9]/.test(password)) {
      errors.push("Must contain at least one number.");
    }
  
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Must contain at least one special character.");
    }
  
    return errors;
  }
  