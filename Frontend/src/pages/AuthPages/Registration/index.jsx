import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";

import AuthLayout from "components/AuthLayout";

import AuthStore from "stores/AuthStore";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Enter valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?![0-9]*$)/, "Password cannot be entirely numeric")
    .notOneOf(
      ["password", "12345678", "qwerty", "11111111"],
      "Password is too common"
    ),
  password2: Yup.string()
    .required("Confirm your password.")
    .oneOf([Yup.ref("password"), null], "Passwords do not match"),
});

const RegistrationPage = observer(() => {
  const navigate = useNavigate();

  const { registration } = AuthStore;

  const onSubmit = (values) => {
    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
      password2: values.password2,
    };
    registration({ payload: payload, navigate: navigate });
  };
  const formFields = [
    { name: "username", placeholder: "Username" },
    { name: "email", placeholder: "Email" },
    {
      name: "password",
      placeholder: "Password",
      isPassword: true,
      onPaste: (e) => e.preventDefault(),
      onCopy: (e) => e.preventDefault(),
    },
    {
      name: "password2",
      placeholder: "Confirm Password",
      isPassword: true,
      onPaste: (e) => e.preventDefault(),
      onCopy: (e) => e.preventDefault(),
    },
  ];

  return (
    <AuthLayout
      title={"Sign Up"}
      linkText={"Already have an account?"}
      linkTo={"/login"}
      initialValues={{ username: "", email: "", password: "", password2: "" }}
      validationSchema={schema}
      onSubmit={onSubmit}
      fields={formFields}
    />
  );
});

export default RegistrationPage;
