export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  const isNameValid =
    name.trim().length >= 3 && /^[a-zA-Z\s]+$/.test(name.trim());

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid)
    return "Password must be 8–15 characters with uppercase, lowercase, number, and special character.";
  if (name && !isNameValid)
    return "Name must be at least 3 letters and contain only alphabets.";

  return null; // All good
};
