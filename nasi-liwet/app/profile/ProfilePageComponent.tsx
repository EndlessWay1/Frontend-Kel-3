"use client";
import { useUser } from "@/app/hook/useUser";
import "./profile.css";
import { ComponentProps, useEffect, useState } from "react";
import { useCsrf } from "../context/csrf/CsrfContext";
import { useRouter } from "next/navigation";

function prettyDate(time: Date) {
  const date = time,
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return (
      year.toString() +
      "-" +
      (month < 10 ? "0" + month.toString() : month.toString()) +
      "-" +
      (day < 10 ? "0" + day.toString() : day.toString())
    );

  const r =
    (day_diff == 0 &&
      ((diff < 60 && "just now") ||
        (diff < 120 && "1 minute ago") ||
        (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
        (diff < 7200 && "1 hour ago") ||
        (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
    (day_diff == 1 && "Yesterday") ||
    (day_diff < 7 && day_diff + " days ago") ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago");
  return r;
}

function ProfilePageComponent() {
  const { user } = useUser();
  const [name, setName] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [errorName, setErrorName] = useState("");

  const { csrfToken } = useCsrf();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(user.name ?? "");
    }
  }, [user]);

  const submitEdit: NonNullable<ComponentProps<"form">["onSubmit"]> = async (
    e,
  ) => {
    e.preventDefault();

    setGlobalError("");
    setErrorName("");

    if (user && name === user.name) {
      setErrorName("Name must be different.");
      return;
    }

    if (name.length <= 1) {
      setErrorName("Name must be greater than 1.");
      return;
    }

    try {
      const response = await fetch("/api/editProfile", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ id: user!.id, name }),
      });
      const result = await response.json();
      if (!response.ok) {
        setGlobalError(result.error);
        return;
      }
      console.log(result);
      window.location.reload();
    } catch {
      setGlobalError("A network error occurred. Please try again.");
      return;
    }
  };

  return (
    <div id='user-info'>
      <div id='profile' className='card'>
        {user ? (
          <div className='card-body'>
            <h4 className='card-title text-center fs-2'>User Profile</h4>
            <p className='text-center profile-date'>
              <span>Joined since {prettyDate(new Date(user.createdAt))}</span>
            </p>
            <div className='profile-content'>
              <h5>Email</h5>

              <div className='container-fluid'>{user.email}</div>
            </div>

            <form id='form-user-edit' method='POST' onSubmit={submitEdit}>
              <div className='profile-content'>
                <h5>Name</h5>
                <input
                  className='container-fluid'
                  type='text'
                  name='name'
                  defaultValue={user.name ?? ""}
                  id='user-name-form'
                  onChange={(e) => setName(e.target.value)}
                />
                <p className='user-error text-center'>{errorName}</p>
              </div>
              <p className='user-error text-center'>{globalError}</p>

              <div
                className='form-buttons'
                style={{
                  display: name === (user.name ?? "") ? "none" : "flex",
                }}
              >
                <button
                  type='button'
                  className='form-cancel-btn'
                  onClick={() => setName(user.name ?? "")}
                >
                  Cancel
                </button>

                <button type='submit' className='form-change-btn'>
                  Change
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ fontWeight: 600, fontSize: "x-large" }}>
              There is nothing to see here
            </p>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
export default ProfilePageComponent;
