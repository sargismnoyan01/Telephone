import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";

import AuthStore from "stores/AuthStore";
import AuthLayout from "components/AuthLayout";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = observer(() => {
  const navigate = useNavigate();

  const { login } = AuthStore;

  const onSubmit = (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };

    login({ payload: payload, navigate: navigate });
  };

  const formFields = [
    { name: "username", placeholder: "Username" },
    { name: "password", placeholder: "Password", isPassword: true },
  ];

  return (
    <AuthLayout
      title={"Sign In"}
      linkText={"Don't have an account?"}
      linkTo={"/registration"}
      initialValues={{ username: "", password: "" }}
      validationSchema={schema}
      onSubmit={onSubmit}
      fields={formFields}
    />
  );
});

export default LoginPage;
