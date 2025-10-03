"use client";
import { useActionState, useEffect } from "react";
import styles from "./styles.module.css";
import { signupAction } from "./sign-up-action";

const SignUp = (props) => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState(
    signupAction,
    {
      error: "",
    }
  );
  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <div>
          <label htmlFor="login" className={styles.label}>
            Login:
          </label>
          <input
            name="login"
            type="text"
            className={styles.input}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            name="password"
            type="password"
            className={styles.input}
            required
          ></input>
        </div>
        {error && <div>{error}</div>}
        <button className={styles.button} disabled={isPending}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
