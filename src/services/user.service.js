import axios from "axios";
import Vue from "vue";

export const addUser = ({ success, error, object }) => {
  console.log("inside register", object);
  const api = "http://10.30.1.91:8082/users/add";

  axios
    .post(api, object)
    .then((response) => {
      Vue.$toast.success("Registered Sucessfully");

      console.log(response);
      success && success(response);
    })
    .catch((e) => {
      Vue.$toast.error(e.response.data.message);

      console.log("service errror", e);
      error && error(e);
    });
};
export const userLogin = ({ success, error, user }) => {
  const login = "http://10.30.1.91:8082/login";
  axios
    .post(login, user)
    .then((response) => {
      console.log(response);
      success && success(response);
    })
    .catch((e) => {
      console.log(e);
      Vue.$toast.error(e.response.data.message);
      error && error(e);
    });
};
export const getUser = ({ success, error, object }) => {
  const api = `http://10.30.1.91:8082/users/id?id=${object}`;
  axios
    .get(api, object)
    .then((response) => {
      console.log(response);
      success && success(response);
    })
    .catch((e) => {
      console.log(e);
      error && error(e);
    });
};
export const updateUser = ({ success, error, object }) => {
  const api = "http://10.30.1.91:8082/users/update";
  axios
    .put(api, object)
    .then((response) => {
      console.log("update", response);
      Vue.$toast.success("updated successfully");
      success && success(response);
    })
    .catch((e) => {
      // console.log(e)
      Vue.$toast.error(e.response.data.message);
      error && error(e);
    });
};
export const changePassword = ({ success, error, object }) => {
  const api = "http://10.30.1.91:8082/users/update/password";
  axios
    .put(api, object)
    .then((response) => {
      console.log("update", response);
      Vue.$toast.success("updated successfully");
      success && success(response);
    })
    .catch((e) => {
      // console.log(e)
      Vue.$toast.error(e.response.data.message);
      error && error(e);
    });
};
