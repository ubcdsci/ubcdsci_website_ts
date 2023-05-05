// Library imports.
import { useForm } from 'react-hook-form';

// Component imports.
import { ErrorMessage } from '@hookform/error-message';

// Style imports.
import styles from './NewsletterForm.module.scss';

// Media imports.


/**
 * Renders a NewsletterForm component.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const NewsletterForm = (props: any) => {
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
  const onSubmit = async (formInfo: any) => {
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
    <form className={styles.NewsletterForm} autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.Header}>
        <h2>Sign Up For Our Newsletter!</h2>
        <p>
          Stay up to date and receive the latest information on&nbsp;
          <code>club meetings</code>, <code>events</code>, <code>workshops</code>, and
          more by subscribing to our <code>newsletter</code>.
        </p>
      </div>

      <div className={styles.Fields}>
        <fieldset className={styles.Email}>
          <legend>Email *</legend>

          <label htmlFor="email" />
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
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <fieldset className={styles.Name}>
          <legend>Name</legend>

          <label htmlFor="firstName" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            {...register("firstName")}
          />
          <p>First Name</p>

          <label htmlFor="lastName" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            {...register("lastName")}
          />
          <p>Last Name</p>
        </fieldset>

        <fieldset className={styles.StudentInfo}>
          <legend>Student Info</legend>

          <label htmlFor="faculty" />
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

          <label htmlFor="id" />
          <input
            type="text"
            onFocus={(e) => {
              e.target.value = "";
            }}
            maxLength={8}
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
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <div className={styles.Submission}>
          <h3>* REQUIRED FIELDS</h3>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default NewsletterForm;
