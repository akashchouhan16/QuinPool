import { VDaterange } from "vuetify-daterange-picker"
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
export default {
    components: { VDaterange },
    data: () => ({
        user:{
            name:'',
            username:'',
            password: '',
            cpassword:'',
            phone: '',
            vehicleNumber:'',
            seats:null,
            LicenseNumber:'',
            address:'',
            vehicleName:'',
            color:'',
            vehicleBrand:'',
            date:'',
            newdate:new Date().toISOString()

        },
        range: {
            start: '2018-12-04',
            end: '2019-02-20'
        },
        message:"",
        passerror:false,
      valid: true,
      name: '',
      nameRules: [
        value => !!value || 'Name is required',
        value => (value && value.length >= 5) || 'Min 5 characters',
        value=>/^[a-zA-Z +/.]*$/.test(value)|| "name must be valid",
       // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      userNameRules:[
        value => !!value || 'userName is required',
        value => (value && value.length >= 5) || 'Min 5 characters',
        value=>/^[a-zA-Z +/.]*$/.test(value)|| "user name must be valid",
      ],
      
      phoneRules: [
        v => !!v || 'Phone is required',
     //   v => /.+@.+\..+/.test(v) || 'phone must be valid',
     v=>(v&&v>=0)||"enter valid phone number",
     v=> (v && v.length == 10) || 'Invalid number',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      addressrules:[
        value=>!!value|| 'Required.',
        value=>(value && value.length<=200)||"address is too long",
      ],
      numberrules:[
        value => !!value || 'Number is required',
       // value => (value && value.length >= 3) || 'Min 3 characters',
       // value=>/^[a-zA-Z0-9 +/.]*$/.test(value)|| "name must be valid",
        value=>/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(value)||" must be valid",
      ],
      vehicleRules: [
        value => !!value || 'Name is required',
        value => (value && value.length >= 3) || 'Min 3 characters',
        value=>/^[a-zA-Z +/.]*$/.test(value)|| "name must be valid",
       // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      colorRules:[
        value => !!value || 'Color is required',
        value=>/^[a-zA-Z +/.]*$/.test(value)|| "color must be valid",
      ],
      seatingRules:[
        value=>!!value || 'Seat Number Required',
        value => (value>0 && value<=8) || 'Should be between 0-8',
      ],
      LicenseNumberRules:[
        value => !!value || 'Color is required',
        value=>/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-2])[0-9]{7}$/.test(value)|| "number must be valid",
        
      ],
      show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 5 || 'Min 5 characters',
        //  emailMatch: () => (`The email and password you entered don't match`),
        },
      checkbox: false,
      vehicleNumber:'',
      seats:null,
      LicenseNumber:'',
      activePicker: null,
      date: null,
      menu: false,
    
      vehicleName:'',
    
    }),
    watch: {
        menu (val) {
          val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
      },

    methods: {
        check(){
            this.message="pass"
          },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      save (date) {
        this.$refs.menu.save(date)
      },
    },
    computed:{
        pass(){
            if(this.user.password!=this.user.cpassword){
              this.passerror=true
            }
            else{
              this.passerror=false
            }
            return this.passerror
          }
    }
  }