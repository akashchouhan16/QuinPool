import {getUser} from '@/services/user.service'
export default{
    data(){
        return{
            user:{}
        }
    },
    created(){
        getUser({
            success:(response)=>{
                console.log(response)
                this.user=response.data
            },
            error:(e)=>{
                console.log(e)
            },
            object:localStorage.getItem('userid')
        })
    }
}