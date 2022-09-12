import preloaderMixin from '@/mixins/preloader.mixin'
import preloaderComponent from '@/components/customComponent/preloaderComponent.vue'

export default {
    name: 'InitiatePoolComponent',
    data(){
        return {

        }
    },
    components:{
        preloaderComponent
    },
    mixins: [preloaderMixin],
    methods:{
        
    }
}