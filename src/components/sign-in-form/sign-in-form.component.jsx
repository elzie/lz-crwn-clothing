import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';
import { useNavigate } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
// import '../button/button.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    //setCurrentUser(user);
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      //setCurrentUser(user);
      resetFormFields();
      navigate('/shop');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with ur email n password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
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
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
