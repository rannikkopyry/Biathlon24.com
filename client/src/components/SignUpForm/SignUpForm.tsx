import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./SignUpForm.scss";
import axios from "axios";


const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!"),
});

const SignUpForm = () => {
  const submitForm = async (values) => {
    console.log(values);
    const { email }  = values;
    try {
      const payload = {
        email_address: email,
      };

      await axios.post('/.netlify/functions/add-email-subscriber', payload);
      alert('Contact details were added succesfully');
    } catch (error) {
      alert(error.message)
    }
  };
  return (
    <div className="form">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
        {(formik) => (
          <Form>
            <h2>Sign up for our newsletter!</h2>
            <Field name="email" placeholder="Your email address" label="Email"/>
            <ErrorMessage name="email" />
            <button 
            disabled={!formik.isValid || !formik.dirty}
            type="submit"
            >Subscribe!</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;