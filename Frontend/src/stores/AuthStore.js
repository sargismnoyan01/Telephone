import { makeObservable, observable, action, runInAction } from "mobx";
import axios, { publicAxios } from "config/axios";
import { privatePaths } from "config/routes";
import toast from "react-hot-toast";

class AuthStore {
  user = {};

  isLoadingLogin = false;
  isLoadingUser = false;

  constructor() {
    makeObservable(this, {
      user: observable.ref,
      isLoadingLogin: observable.ref,

      login: action,
      registration: action,
      logout: action,
      getUser: action,
    });
  }

  login = ({ payload, navigate }) => {
    runInAction(() => {
      this.isLoadingLogin = true;
    });
    publicAxios
      .post("/login/", payload)
      .then(({ data }) => {
        localStorage.setItem("access_token", data.token);
        navigate &&
          navigate(Object.values(privatePaths)[0], {
            replace: true,
          });
        window.location.reload();

        runInAction(() => {
          this.isLoadingLogin = false;
        });
      })
      .catch((error) => {
        toast.error("Invalid username or password");
        runInAction(() => {
          this.isLoadingLogin = false;
        });
      });
  };

  registration = ({ payload, navigate }) => {
    publicAxios
      .post("/register/", payload)
      .then(({ data }) => {
        toast.success("You have successfully registered");
        navigate &&
          navigate("/login", {
            replace: true,
          });
      })
      .catch((error) => {
        runInAction(() => {
          toast.error("Registration failed");
        });
      });
  };

  getUser = () => {
    runInAction(() => {
      this.isLoadingUser = true;
    });
    axios
      .get("/user-me/")
      .then(({ data }) => {
        this.user = data;
        this.isLoadingUser = false;
      })
      .catch((error) => {
        runInAction(() => {
          this.isLoadingUser = false;
        });
      });
  };

  logout = (navigate) => {
    axios
      .post("/logout/")
      .then(() => {
        runInAction(() => {
          this.user = {};
          localStorage.clear();
        });
      })
      .catch((error) => {
        runInAction(() => {
          console.log(error);
        });
      })
      .finally(
        () =>
          navigate &&
          navigate("/login", {
            replace: true,
          })
      );
  };
}

export default new AuthStore();
