<template>
  <div>
     <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
   

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          User Details
        </v-card-title>

        <v-card-text>
          <v-form>
        <v-row>
          <!-- <v-col lg="12" md="12" sm="12">
            <p>Name:{{ user.name }}</p>
          </v-col> -->
          <v-col lg="6" md="12" sm="12">
            <v-text-field
              v-model="user.phoneNumber"
              :rules="phoneRules"
              label="Phone"
              color="black "
            ></v-text-field>
          </v-col>
        </v-row>
        <div v-if="user.hasVehicle">
          <v-row>
            <v-col lg="6" md="12" sm="12">
                <v-text-field
                  v-model="user.license"
                  :rules="LicenseNumberRules"
                  label="License Number"
                  required
                ></v-text-field>
              </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.name"
                :rules="vehicleRules"
                label="CarName"
                color="black "
              ></v-text-field>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.brand"
                :rules="vehicleRules"
                label="Brand"
                color="black "
              ></v-text-field>
            </v-col> </v-row
          ><v-row>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.color"
                :rules="colorRules"
                label="Color"
                color="black "
              ></v-text-field>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.vehicleNo"
                :rules="numberrules"
                label="Vehicle Number"
                color="black "
              ></v-text-field>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.capacity"
                label="Number of Seats"
                :rules="seatingRules"
                color="black "
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-textarea
          rounded
          solo
          dense
          filled
          name="input-7-4"
          :rules="addressrules"
          label="Address"
          v-model="user.address"
        ></v-textarea>
      </v-form>
                </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="update()"
            
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    <v-card elevation="2">
      <div class="user">
      <h3>User Details</h3>
      <v-icon @click="dialog=true">{{ icons.mdiPencil }}</v-icon>
      </div><br/>
        <v-row>
          <div>
            <v-card-text>Name:</v-card-text>
            <v-card-text>Phone:</v-card-text>
            <v-card-text>Address:</v-card-text>
      
           
          </div>
             <div >
              <v-card-text>{{user.name}}</v-card-text>
              <v-card-text>{{user.phoneNumber}}</v-card-text>
              <v-card-text>{{user.address}}</v-card-text>
            </div>
           
          
        </v-row><br/>

        <div v-if="user.hasVehicle">
          <h3>Vehicle Details</h3><br/>
          <v-row>
            <div>
              
            <v-card-text>License:</v-card-text>
            <v-card-text>Brand:</v-card-text>
            <v-card-text>Vehicle Name:</v-card-text> 
          </div>
          <div>
            <v-card-text
              >{{user.license}}</v-card-text>
              <v-card-text>{{user.vehicle.brand}}</v-card-text>
              <v-card-text>{{user.vehicle.name}}</v-card-text>
            
          </div>
    
              <div>
            <v-card-text>Vehicle color:</v-card-text>
            <v-card-text>Vehicle Number:</v-card-text>
            <v-card-text>Seats:</v-card-text> 
          </div>
          <div>
            <v-card-text>{{user.vehicle.color}}</v-card-text>
          
          
              <v-card-text>{{user.vehicle.vehicleNo}}</v-card-text>
          
        
               <v-card-text>{{user.vehicle.capacity}}</v-card-text>
          </div>
             
          
          </v-row>
        </div>
      
    
    
    </v-card>
   
  </div>
  
</template>

<script src="./scripts/UserComponent.js">

</script>

<style>
.user{
      display: flex;
    justify-content: space-between;
}
.v-btn--rounded {
  border-radius: 5px;
}
form.v-form {
  padding:23px !important;
}
/* .col-sm-12.col-md-12.col-lg-12.col {
  height:20px;
} */
.v-card.v-sheet.theme--light.elevation-2 {
      padding: 40px;
      border-radius: 20px;
}
.reg-button {
  /* margin-left: -90px;
  margin-right: 30px; */
  margin: auto;
  width: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 30px;
}
.update{
  display:flex;
}
</style>