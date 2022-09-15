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
import ErrorComponent from "@/components/ErrorComponent.vue";

/* Define methods for router guard */

import {
  checkForLoginFind,
  checkForLoginInitiate,
  isAlreadyLoggedIn,
  isNotLoggedIn,
} from "@/utils/router.utils";

/* Define router */
const routes = [
  {
    path: "/",
    name: "Home",
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
    beforeEnter: isAlreadyLoggedIn,
  },
  {
    path: "/signup",
    component: SignUpComponent,
    beforeEnter: isAlreadyLoggedIn,
  },
  {
    path: "/history",
    component: UserRideHistoryComponent,
    beforeEnter: isNotLoggedIn,
  },
  {
    path: "/user",
    component: UserComponent,
    beforeEnter: isNotLoggedIn,
  },
  {
    path: "/initiatepool/confirmation",
    component: PoolConfirmedComponent,
    beforeEnter: isNotLoggedIn,
  },
  {
    path: "/notfound",
    component: ErrorComponent,
  },
  {
    path: "/*",
    redirect: "/notfound",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
