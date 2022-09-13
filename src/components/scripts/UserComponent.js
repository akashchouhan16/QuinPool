import {getUser} from '@/services/user.service'
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'

export default{
    data(){
         
        return{
            icons: {
                mdiAccount,
                mdiPencil,
                mdiShareVariant,
                mdiDelete,
              },
              dialog: false,
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
            object:localStorage.getItem('userId')
        })
    }
}