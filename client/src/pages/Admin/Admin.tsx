// Library imports.
import { useState } from "react";
import { useForm } from "react-hook-form";

// Component imports.
import { ErrorMessage } from "@hookform/error-message";

// Style imports.
import styles from "./Admin.module.scss";

// Media imports.
import logo from "../../images/logo/logo.png";


/**
 * Renders the Admin page.
 * @returns {JSX.Element} JSX Component.
 */
const Admin = (props : any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Destructure useForm object for usage.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (formInfo: any) => {
    await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  };

  // props.onLogin(username, password);

  return (
    <form className={styles.Admin} autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <img src={logo} alt="logo" className={styles.Logo} />

      <div className={styles.Fields}>
        <h1>Login as Administrator</h1>

        <fieldset>
          <legend>Username</legend>

          <label htmlFor="username" />
          <input
            type="username"
            onFocus={(e) => {
              e.target.value = "";
            }}
            {...register("username", {
              required: "Please enter admin username.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <fieldset>
          <legend>Password</legend>

          <label htmlFor="password" />
          <input
            type="password"
            onFocus={(e) => {
              e.target.value = "";
            }}
            {...register("password", {
              required: "Please enter admin password.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <div className={styles.Submission}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Admin;
