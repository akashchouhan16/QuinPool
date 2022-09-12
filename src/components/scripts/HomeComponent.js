import Vue from 'vue'

export default{
    name: 'HomeComponent',
    data(){
        return {
            isLoading: true
        }
    },
    created(){
        setInterval(()=>{
            this.isLoading = false;
        },500);
    },
    methods:{
        completeSetUp(){
            Vue.$toast.warning('Setup could not be complete')
        },
        initiatePool(){
            Vue.$toast.open({
                message: 'Initiating a pool ride...',
                type: 'default',
                duration: 3000
            })
            this.$router.push({path: '/initiatepool'});
        },
        findPool(){
            Vue.$toast.open({
                message: 'Finding nearby pool rides...',
                type: 'default',
                duration: 3000
            })
            this.$router.push({path: '/findpool'});
        }
    }
}