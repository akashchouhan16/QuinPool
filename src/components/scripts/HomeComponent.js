export default{
    name: 'HomeComponent',
    data(){
        return {
            isLoading: true
        }
    },
    created(){
       this.loadData();
    },
    methods:{
        loadData(){
            setInterval(()=>{
                this.isLoading = false;
            },2000);
        }
    }
}