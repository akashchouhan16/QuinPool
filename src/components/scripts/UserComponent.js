import { getUser, updateUser } from '@/services/user.service'
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
            icons: {
                mdiAccount,
                mdiPencil,
                mdiShareVariant,
                mdiDelete,
            },
            dialog: false,
            user: {},
            updateduser:{}
            
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

}