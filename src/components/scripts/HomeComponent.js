import Vue from 'vue'
import preloaderMixin from '@/mixins/preloader.mixin'
export default{
    name: 'HomeComponent',
    data(){
        return {
            isLoading: true
        }
    },
    mixins: [preloaderMixin],
    methods:{
        completeSetUp(){
            Vue.$toast.warning('Setup could not be complete')
        },
        initiatePool(){
            Vue.$toast.open({
                message: 'Initiating a pool ride...',
                type: 'default',
                duration: 2000
            })
            this.$router.push({path: '/initiatepool'});
        },
        findPool(){
            Vue.$toast.open({
                message: 'Finding nearby pool rides...',
                type: 'default',
                duration: 2000
            })
            this.$router.push({path: '/findpool'});
        }
    }
}