import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


/* Import components */
import InitiatePoolComponent from '@/components/InitiatePoolComponent.vue'
import FindPoolComponent from '@/components/FindPoolComponent.vue'

/* Define methods for router guard */ 

/* Define router */ 
const routes = [
    {
        path: '/initiatepool',
        component: InitiatePoolComponent
    },
    {
        path: '/findpool',
        component: FindPoolComponent
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;