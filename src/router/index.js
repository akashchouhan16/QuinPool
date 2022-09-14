import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

/* Import components */
import HomeComponent from "@/components/HomeComponent.vue";
import InitiatePoolComponent from "@/components/InitiatePoolComponent.vue";
import FindPoolComponent from "@/components/FindPoolComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import SignUpComponent from "@/components/SignUpComponent.vue";
import UserRideHistoryComponent from "@/components/UserRideHistoryComponent.vue";
import UserComponent from "@/components/UserComponent.vue";
import PoolConfirmedComponent from "@/components/PoolConfirmedComponent.vue";

/* Define methods for router guard */
const checkForLoginInitiate = (to, from, next) => {
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

const checkForLoginFind = (to, from, next) => {
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
/* Define router */
const routes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/initiatepool",
    component: InitiatePoolComponent,
    beforeEnter: checkForLoginInitiate,
  },
  {
    path: "/findpool",
    component: FindPoolComponent,
    beforeEnter: checkForLoginFind,
  },
  {
    path: "/login",
    component: LoginComponent,
  },
  {
    path: "/signup",
    component: SignUpComponent,
  },
  {
    path: "/history",
    component: UserRideHistoryComponent,
    // beforeEnter: checkForLogin
  },
  {
    path: "/user",
    component: UserComponent,
  },
  {
    path: "/initiatepool/confirmation",
    component: PoolConfirmedComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
