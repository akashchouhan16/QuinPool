import Vue from 'vue'

export default{
    name: 'HomeComponent',
    data(){
        return {
            isLoading: true
        }
    },
    created(){
       this.loadData();
       Vue.$toast.open({
            message: 'Welcome Back!',
            type: 'default',
            position: "top",
            duration: 3000
       });
    },
    methods:{
        loadData(){
            setInterval(()=>{
                this.isLoading = false;
            },2000);
        },
        completeSetUp(){
            Vue.$toast.warning('Setup could not be complete')
        }
    }
}