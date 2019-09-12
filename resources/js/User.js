import {axios} from "./axios";

class User {
  async auth () {
    const user = await axios.get("/auth_user")
      .then(res => {
        return res.data;
      });
    return user;
  }
}

export default User;
