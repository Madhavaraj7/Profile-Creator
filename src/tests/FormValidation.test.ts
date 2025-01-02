import validatePassword from "../utils/validation";

describe('Password Validation Tests', () => {
  test('should return an error for passwords less than 8 characters', () => {
    expect(validatePassword('short')).toContain('Must be at least 8 characters long.');
  });

  test('should return an error if password has no uppercase letter', () => {
    expect(validatePassword('password1!')).toContain('Must contain at least one uppercase letter.');
  });

  test('should return an error if password has no lowercase letter', () => {
    expect(validatePassword('PASSWORD1!')).toContain('Must contain at least one lowercase letter.');
  });

  test('should return an error if password has no number', () => {
    expect(validatePassword('Password!')).toContain('Must contain at least one number.');
  });

  test('should return an error if password has no special character', () => {
    expect(validatePassword('Password1')).toContain('Must contain at least one special character.');
  });

  test('should return no errors for a valid password', () => {
    const validPassword = 'Password1!';
    expect(validatePassword(validPassword)).toEqual([]); 
  });
});
