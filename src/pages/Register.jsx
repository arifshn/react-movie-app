import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const repassword = formData.get("repassword");

    if (password !== repassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Kayıt başarılı:", user);
      alert("Kayıt başarılı!");
      e.target.reset();
    } catch (error) {
      console.error("Kayıt hatası:", error.message);
      alert("Kayıt sırasında bir hata oluştu:\n" + error.message);
    }
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Register</h1>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="repassword" className="form-label">
                          Re-Password
                        </label>
                        <input
                          type="password"
                          name="repassword"
                          id="repassword"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="hobbies" className="form-label">
                      Hobiler
                    </label>
                    <div className={`card card-body border ${cardColor}`}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="hobbies"
                          id="cars"
                          className="form-check-input"
                          value="cars"
                        />
                        <label htmlFor="cars" className="form-check-label">
                          Cars
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="hobbies"
                          id="books"
                          className="form-check-input"
                          value="books"
                        />
                        <label htmlFor="books" className="form-check-label">
                          Books
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="hobbies"
                          id="movies"
                          className="form-check-input"
                          value="movies"
                        />
                        <label htmlFor="movies" className="form-check-label">
                          Movies
                        </label>
                      </div>
                    </div>
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
