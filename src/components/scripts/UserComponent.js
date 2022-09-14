import { getUser, updateUser,changePassword } from '@/services/user.service'
import rulesMixin from '@/mixins/rules.mixin'
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
} from '@mdi/js'

export default {
    data() {

        return {
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            icons: {
                mdiAccount,
                mdiPencil,
                mdiShareVariant,
                mdiDelete,
            },
            dialog: false,
            dialog1:false,
            user: {},
            updateduser:{},
            confirmPass:'',
            passerror:false,
            password:{
                currentPassword:'',
                newPassword:'',
                userId:localStorage.getItem('userId')

            },
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length>= 5 || 'Min 5 characters',
                max:v=>v.length<=20||'max 20 characters',
                pass: v => {
      
                  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
      
                  return (
      
                      pattern.test(v) ||
      
                      "Min 8 characters with at least one uppercase letter,a lowercase letter, a number and a special character"
      
                  );
      
              },
              //  emailMatch: () => (`The email and password you entered don't match`),
              },
          
            
        }
    },
    mixins: [rulesMixin],
    methods: {
        update() {
            this.dialog = false
            this. updateduser= {
                "address": this.user.address,
                "licenseExpiration": this.user.licenseExpiration,
                "licenseNo": this.user.license,
                "name": this.user.name,
                "phoneNumber":this.user.phoneNumber,
                "userId": this.user.id,
                "vehicle": {
                    "brand": this.user.vehicle.brand,
                    "capacity": this.user.vehicle.capacity,
                    "color":this.user.vehicle.color,
                    "name": this.user.vehicle.name,
                    "vehicleNo": this.user.vehicle.vehicleNo,
                }
            }
            console.log('user',this.user)
            console.log(this.updateduser)
            updateUser({
                success: (response) => {
                    console.log(response)
                },
                error: (e) => {
                    console.log(e)
                },
               
                object: this.updateduser
            })
        },
        pass(){
            this.dialog1=true
        },
        changePass(){
            this.dialog1=false
            console.log(this.password)
            changePassword({
                success: (response) => {
                    console.log('pass',response)
                    this.user = response.data
                },
                error: (e) => {
                    console.log(e)
                },
                
                object:this.password
            })
            this.password={
                currentPassword:'',
                newPassword:'',
            },
            this.confirmPass='';


        }
    },
    created() {

        getUser({
            success: (response) => {
                console.log(response)
                this.user = response.data
            },
            error: (e) => {
                console.log(e)
            },
            object: localStorage.getItem('userId')
        })
    },
    computed:{
        passwordCheck(){
            if(this.password.newPassword!=this.confirmPass){
                console.log('inside true')
              this.passerror=true
            }
            else{
              this.passerror=false
              console.log('inside false')
            }
            return this.passerror
          }
    }
}