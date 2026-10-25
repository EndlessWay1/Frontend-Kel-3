"use client";
import { ComponentProps, useState } from "react";
import "./login.css";
import { useCsrf } from "../context/csrf/CsrfContext";
import { redirect } from "next/navigation";

type Mode = "signup" | "signin";

function LoginSignUpCotent() {
  const [mode, setMode] = useState<Mode>("signin");

  const [email, setEmail] = useState<string>("");

  const [name, setName] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [valError, setValError] = useState<Record<string, string>>({});

  const [globalError, setGlobalError] = useState("");

  const { csrfToken } = useCsrf();

  const clearError = () => {
    setValError({});
    setGlobalError("");
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const onSubmitSignIn: NonNullable<
    ComponentProps<"form">["onSubmit"]
  > = async (e) => {
    e.preventDefault();

    clearError();

    const validationError: Record<string, string> = {};

    if (!validateEmail(email)) {
      validationError["email"] = "Please enter a valid email address.";
      return;
    }

    setValError(validationError);
    if (Object.keys(valError).length !== 0) {
      return;
    }

    try {
      console.log(csrfToken);
      const response = await fetch("/api/signin", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setGlobalError(result.error);
        return;
      }

      console.log(response);

      // Sign-in succeeded.
      // Redirect or refresh the UI as appropriate.
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        setGlobalError("A network error occurred. Please try again.");
        return;
      }
    }
    window.location.replace("/");
  };

  const onSubmitSignUp: NonNullable<
    ComponentProps<"form">["onSubmit"]
  > = async (e) => {
    e.preventDefault();
    clearError();

    const validationError: Record<string, string> = {};

    if (!validateEmail(email)) {
      validationError["email"] = "Please enter a valid email address.";
      return;
    }

    if (name.length < 1) {
      validationError["name"] = "Name is required.";
    }

    if (password.length < 1) {
      validationError["password"] = "Password is required.";
    } else if (password.length < 8) {
      validationError["password"] = "Password must be more than 8 characters";
    }

    if (password !== confirmPassword) {
      validationError["confirmpassword"] = "Password don't matched.";
    }

    setValError(validationError);

    console.log(valError);

    if (Object.keys(valError).length !== 0) {
      return;
    }

    try {
      console.log(csrfToken);
      const response = await fetch("/api/signup", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
          email,
          password,
          confirm: confirmPassword,
          name,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setGlobalError(result.error);
        return;
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        setGlobalError("A network error occurred. Please try again.");
        return;
      }
    }
    window.location.replace("/");
  };

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
                <span className='user-error pt-3 text-center'>
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
                  className='user-error pt-3 text-center'
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
