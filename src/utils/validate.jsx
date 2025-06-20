export const checkValidData = (email, password) => {
  // Check if email is valid
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (!emailRegex.test(email)) {
    return "Email ID is not valid";
  }

  // Check if password is valid
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return "Password is not valid";
  }

  return null;
};
