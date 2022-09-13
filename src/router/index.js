import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


/* Import components */
import HomeComponent from '@/components/HomeComponent.vue'
import InitiatePoolComponent from '@/components/InitiatePoolComponent.vue'
import FindPoolComponent from '@/components/FindPoolComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import SignUpComponent from '@/components/SignUpComponent.vue'
import UserRideHistoryComponent from "@/components/UserRideHistoryComponent.vue";

/* Define methods for router guard */ 

/* Define router */ 
const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/initiatepool',
        component: InitiatePoolComponent
    },
    {
        path: '/findpool',
        component: FindPoolComponent
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/signup',
        component: SignUpComponent
    },
    {
        path: '/history',
        component: UserRideHistoryComponent
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;