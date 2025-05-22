import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // const signInWithGoogle = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   await createUserDocumentFromAuth(user);
  // };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      alert("🎉 Google Sign In Successful");
    } catch (error) {
      console.log(error);
      alert("Something went wrong with Google Sign In!");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      alert("🎉 Sign In Successful");
      resetFormFields();
    } catch (error) {
      console.error("Firebase Sign-in Error:", error);
      alert("Sign In Error: Username and password does not match!!!");
      // switch (error.code) {
      //   case "auth/user-not-found":
      //     alert("❌ No user with that email.");
      //     break;
      //   case "auth/wrong-password":
      //     alert("❌ Incorrect password.");
      //     break;
      //   case "auth/invalid-email":
      //     alert("❌ Invalid email format.");
      //     break;
      //   case "auth/too-many-requests":
      //     alert("⚠️ Too many failed attempts. Try again later.");
      //     break;
      //   default:
      //     alert("⚠️ Something went wrong: " + error.message);
      // }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
