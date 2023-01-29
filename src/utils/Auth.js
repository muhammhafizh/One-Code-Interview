import randomToken from "random-token";
import Cookies from "js-cookie";

export const Auth = {
  isAuthorization() {
    const token = Cookies.get("token");
    const name = Cookies.get("name");
    const id = Cookies.get("id");

    if (token) {
      return { token, name, id };
    }
    return { token: "" };
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("id");
    navigate("/");
  },
  storeUserInfoToCookie(name, id) {
    Cookies.set("token", randomToken(16), { expires: 2 });
    Cookies.set("name", name, { expires: 2 });
    Cookies.set("id", id, { expires: 2 });
    return { name, id };
  },
};
