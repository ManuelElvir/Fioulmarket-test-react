import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Input from "../Components/Input";
import FormBuilder from "../Components/FormBuilder";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Register: " + JSON.stringify(data))
  };

  const emailPattern = useMemo(
    () =>
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    []
  );

  const formData = useMemo(() => ([
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      options: { required: true, pattern: emailPattern },
      errors: errors.email,
      register: {register},
      defaultErrorMessage: "You have to provide a valid email."
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      options: { required: true, minLength: 5, maxLength: 16 },
      errors: errors.password,
      defaultErrorMessage: "Your password must be between 5 and 16 characters length."
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'confirmPassword',
      options: {
        required: true,
        minLength: 5,
        maxLength: 16,
        validate: (val) => {
          if (watch("password") !== val) {
            return "Your passwords must match";
          }
        },
      },
      errors: errors.confirmPassword,
      defaultErrorMessage: "Your passwords must match."
    }
  ]), [errors, register])

  return (
    <div className={styles.RegisterForm}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormBuilder formName='register' formData={formData} register={register} />
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.submitBtn}>Register !</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
