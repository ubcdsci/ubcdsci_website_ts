// Library imports.
import React from "react";
import { useForm } from "react-hook-form";

// Component imports.
import { ErrorMessage } from "@hookform/error-message";

// Media imports.

/**
 * Renders a NewsletterForm sign-up block.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function NewsletterForm(props) {
  // TODO:
  // - Include functionality to sign up for the newsletter.
  // - Add ReCaptcha to prevent button spamming.
  // - Add API call for validating unique email address.
  // - Add API call for adding information into database.

  // Destructure useForm object for usage.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Form submission handler.
  const onSubmit = async (formInfo) => {
    await fetch("/forms/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form
      action=""
      className="newsletterForm"
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="headerBlock">
        <h2>Subscribe to Our Newsletter!</h2>
        <p>
          Stay up to date and receive the latest information about club
          meetings, events, <br />
          workshops and more by subscribing to our newsletter!
        </p>
      </div>

      <div className="inputBlock">
        <fieldset className="emailInput">
          <legend>EMAIL *</legend>

          <label htmlFor="email" className="emailLabel" />
          <input
            type="email"
            onFocus={(e) => {
              e.target.value = "";
            }}
            {...register("email", {
              required: "Please enter your email address.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          <p>Email Address *</p>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <span className="fieldErrorMessage">{message}</span>
            )}
          />
        </fieldset>

        <fieldset className="nameInput">
          <legend>NAME</legend>

          <label htmlFor="firstName" className="firstNameLabel" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            {...register("firstName")}
          />
          <p>First Name</p>

          <label htmlFor="lastName" className="lastNameLabel" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            {...register("lastName")}
          />
          <p>Last Name</p>
        </fieldset>

        <fieldset className="studentInfoInput">
          <legend>STUDENT INFORMATION</legend>

          <label htmlFor="faculty" className="facultyLabel" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            list="faculties"
            {...register("faculty")}
          />
          <datalist id="faculties">
            <option value="Faculty of Applied Science" />
            <option value="Faculty of Arts" />
            <option value="Faculty of Dentistry" />
            <option value="Faculty of Education" />
            <option value="Faculty of Forestry" />
            <option value="Faculty of Graduate and Postdoctoral Studies" />
            <option value="Faculty of Land and Food Systems" />
            <option value="Faculty of Medicine" />
            <option value="Faculty of Pharmaceutical Sciences" />
            <option value="Faculty of Science" />
            <option value="Peter A. Allard School of Law" />
            <option value="Sauder School of Business" />
            <option value="School of Architecture and Landscape Architecture" />
            <option value="School of Audiology and Speech Sciences" />
            <option value="School of Biomedical Engineering" />
            <option value="School of Community and Regional Planning" />
            <option value="School of Information" />
            <option value="School of Journalism, Writing, and Media" />
            <option value="School of Kinesiology" />
            <option value="School of Music" />
            <option value="School of Social Work" />
            <option value="School of Nursing" />
            <option value="Vancouver School of Economics" />
            <option value="Vantage College" />
          </datalist>
          <p>Faculty / School</p>

          <label htmlFor="id" className="studentIdLabel" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            maxLength="8"
            {...register("studentId", {
              pattern: {
                value: /^[0-9]{8}$/,
                message: "Invalid student ID.",
              },
              minLength: {
                value: 8,
                message: "Student ID must be 8 characters.",
              },
            })}
          />
          <p>Student ID #</p>
          <ErrorMessage
            errors={errors}
            name="studentId"
            render={({ message }) => (
              <span className="fieldErrorMessage">{message}</span>
            )}
          />
        </fieldset>

        <p className="disclaimer">* REQUIRED FIELDS</p>

        <div className="submitButton" title="Submit htmlForm">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}
