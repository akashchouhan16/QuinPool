import Vue from "vue";

export const checkForLoginInitiate = (to, from, next) => {
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  if (
    token === null ||
    token === undefined ||
    token === "" ||
    userId === null ||
    userId === undefined ||
    userId === "" ||
    username === null ||
    username === undefined ||
    username === ""
  ) {
    next({ path: "/login", query: { redirect: `/initiatepool` } });
  } else {
    next();
  }
};

export const checkForLoginFind = (to, from, next) => {
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  if (
    token === null ||
    token === undefined ||
    token === "" ||
    userId === null ||
    userId === undefined ||
    userId === "" ||
    username === null ||
    username === undefined ||
    username === ""
  ) {
    next({ path: "/login", query: { redirect: `/findpool` } });
  } else {
    next();
  }
};

export const isAlreadyLoggedIn = (to, from, next) => {
  const userId = localStorage.getItem("userId");
  if (userId === undefined || userId === null || userId === "") {
    next();
  } else {
    Vue.$toast.open({
      message: `You are already logged In as ${localStorage.getItem(
        "username"
      )}`,
      type: "default",
    });
    next({ path: "/" });
  }
};

export const isNotLoggedIn = (to, from, next) => {
  const userId = localStorage.getItem("userId");
  if (userId === undefined || userId === null || userId === "") {
    Vue.$toast.open({
      message: "You must be logged in to view",
      type: "default",
    });
    next({ path: "/" });
  } else {
    next();
  }
};
