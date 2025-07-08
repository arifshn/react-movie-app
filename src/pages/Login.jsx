import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const email = useRef();
  const password = useRef();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    const emailIsInValid = !emailVal.includes("@");
    const passwordIsInValid = passwordVal.length <= 5;

    if (emailIsInValid) {
      setEmailError(true);
      return;
    }
    if (passwordIsInValid) {
      setPasswordError(true);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailVal,
        passwordVal
      );
      const user = userCredential.user;
      console.log("Giriş başarılı:", user);
      // İsteğe bağlı: yönlendirme veya toast
    } catch (error) {
      console.error("Giriş hatası:", error.message);
      alert("Email veya şifre hatalı!");
    }

    email.current.value = "";
    password.current.value = "";
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
              <div className="card-body">
                <form onSubmit={handleFormSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      ref={email}
                      name="email"
                      id="email"
                      className="form-control"
                    />
                    {emailError && (
                      <div className="invalid-feedback d-block">
                        Geçersiz Email
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      ref={password}
                      name="password"
                      id="password"
                      className="form-control"
                    />
                    {passwordError && (
                      <div className="invalid-feedback d-block">
                        5 karakter giriniz
                      </div>
                    )}
                  </div>
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
