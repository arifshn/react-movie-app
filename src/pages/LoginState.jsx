import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validations";

export default function LoginState() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleFormSubmit(e) {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <Input
                    labelText="Email"
                    id="email"
                    name="email"
                    error={emailHasError && "Geçerli Email Giriniz"}
                    type="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                  />
                  <Input
                    labelText="Password"
                    id="password"
                    name="password"
                    error={passwordHasError && "5 karakter giriniz"}
                    type="password"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                  />
                  <button className={`btn btn-outline-${btnColor}`}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
