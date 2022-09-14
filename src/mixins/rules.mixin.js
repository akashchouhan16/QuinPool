export default{
    data(){
        return{
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length >= 5) || 'Min 5 characters',
              //  value=>/^.[a-zA-Z +/.]*$/.test(value)|| "name must be valid",
              //  value=>/^.[a-zA-Z +/.]*$/.test(value)|| "name must be valid",
                value=>/^[A-Za-z\s]{1,}[/.]{0,1}[A-Za-z\s]{0,}$/.test(value)||"name must be valid", 
               // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
              ],
              userNameRules:[
                value => !!value || 'userName is required',
                value => (value && value.length >= 5) || 'Min 5 characters',
                value=>/[a-zA-Z0-9]*$/.test(value)|| "user name must be valid",
              ],
              
              phoneRules: [
                v => !!v || 'Phone is required',
             //   v => /.+@.+\..+/.test(v) || 'phone must be valid',
             v=>(v&&v>0)||"enter valid phone number",
             v=> (v && v.length == 10) || 'Invalid number',
             value=>/[^.]$/.test(value)|| "user name must be valid",
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
                value=>/^[a-zA-Z ]*$/.test(value)|| "name must be valid",
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
                value => !!value || 'License Number is required',
                value=>/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-2])[0-9]{7}$/.test(value)|| "number must be valid",
                
              ],
        }
    }
}