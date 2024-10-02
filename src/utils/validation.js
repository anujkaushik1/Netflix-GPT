export const checkEmailNamePasswordForLogin = ({ email, password, name }) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const namePattern = /^[a-zA-Z\s]{2,}$/.test(name);

  return {
    email: !emailPattern ? "Please enter correct email" : "",
    password: !passwordPattern ? "Please enter correct password" : "",
    name: !namePattern ? "Please enter correct name" : "",
  };
};
