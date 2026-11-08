"use client";
import { ComponentProps, useState } from "react";
import "./login.css";
import { useCsrf } from "../context/csrf/CsrfContext";

type Mode = "signup" | "signin";

function LoginSignUpCotent() {
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [valError, setValError] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const { csrfToken } = useCsrf();

  const clearError = () => {
    setValError({});
    setGlobalError("");
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = (signup: boolean) => {
    const errors: Record<string, string> = {};

    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (signup && !name.trim()) {
      errors.name = "Name is required.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (signup && password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }

    if (signup && password !== confirmPassword) {
      errors.confirmpassword = "Passwords do not match.";
    }

    setValError(errors);
    return Object.keys(errors).length === 0;
  };

  const submit = async (
    e: Parameters<NonNullable<ComponentProps<"form">["onSubmit"]>>[0],
    signup: boolean,
  ) => {
    e.preventDefault();
    clearError();

    if (!validate(signup)) return;

    setLoading(true);

    try {
      console.log(csrfToken);
      const response = await fetch(signup ? "/api/signup" : "/api/signin", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify(
          signup
            ? { email, password, confirm: confirmPassword, name }
            : { email, password },
        ),
      });

      const result = await response.json();

      if (!response.ok) {
        setGlobalError(result.error || "Something went wrong.");
        return;
      }

      window.location.replace("/");

      // Sign-in succeeded.
      // Redirect or refresh the UI as appropriate.
    } catch {
      setGlobalError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isSignup = mode === "signup";


  return (
    <div className='login-container'>
      <div className='login-page'>
        {mode === ("signin" as Mode) ? (
          <>
            <h1 style={{ textAlign: "center" }}>Log In</h1>
            <form method='POST' onSubmit={(e) => onSubmitSignIn(e)}>
              <div className='login-content'>
                <div className='input-container'>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className='user-error'>{valError["email"] ?? ""}</span>
                </div>
                <div className='input-container'>
                  <input
                    type='password'
                    name='password'
                    required
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className='user-error'>
                    {valError["password"] ?? ""}
                  </span>
                </div>
                <span className='user-error py-3 text-center'>
                  {globalError}
                </span>
                <div className='submit-form'>
                  <p style={{ marginLeft: "8px" }}>
                    Don&apos;t have an account?{" "}
                    <span id='sign-up-button'>
                      <button
                        type='button'
                        onClick={() => {
                          clearError();
                          setMode("signup");
                        }}
                      >
                        Sign Up
                      </button>
                    </span>
                  </p>

                  <button type='submit' className='form-button'>
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>Sign Up Page</h1>
            <form method='POST' onSubmit={(e) => onSubmitSignUp(e)}>
              <div className='login-content'>
                <div className='input-container'>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <span className='user-error'>{valError["email"] ?? ""}</span>
                </div>
                <div className='input-container'>
                  <input
                    type='text'
                    name='name'
                    required
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span className='user-error'>{valError["name"] ?? ""}</span>
                </div>

                <div className='input-container'>
                  <input
                    type='password'
                    name='password'
                    required
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />{" "}
                  <span className='user-error'>
                    {valError["password"] ?? ""}
                  </span>
                </div>
                <div className='input-container'>
                  <input
                    type='password'
                    name='confirmpassword'
                    required
                    placeholder='Cofirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />{" "}
                  <span className='user-error'>
                    {valError["confirmpassword"] ?? ""}
                  </span>
                </div>
                <span
                  className='user-error py-3 text-center'
                  id='signup-error-global'
                ></span>
                <div className='submit-form'>
                  <p style={{ marginLeft: "8px" }}>
                    Already have an account?{" "}
                    <span id='log-in-button'>
                      <button
                        type='button'
                        onClick={() => {
                          clearError();
                          setMode("signin");
                        }}
                      >
                        Log In
                      </button>
                    </span>
                  </p>
                  <button type='submit' className='form-button'>
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginSignUpCotent;
