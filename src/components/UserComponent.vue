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
              label="Phone"
              color="black "
            ></v-text-field>
          </v-col>
        </v-row>
        <div v-if="user.hasVehicle">
          <v-row>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.name"
                label="CarName"
                color="black "
              ></v-text-field>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.brand"
                label="Brand"
                color="black "
              ></v-text-field>
            </v-col> </v-row
          ><v-row>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.color"
                label="Color"
                color="black "
              ></v-text-field>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.vehicleNo"
                label="Vehicle Number"
                color="black "
              ></v-text-field>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-text-field
                v-model="user.vehicle.capacity"
                label="Number of Seats"
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
            @click="dialog = false"
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
      </div>
        <v-row>
          
              <v-card-text>Name:{{user.name}}</v-card-text>
            <v-card-text>Phone:{{user.phoneNumber}}</v-card-text>
           <v-card-text>Address:{{user.address}}</v-card-text>
        </v-row>

        <div v-if="user.hasVehicle">
          
          <v-row>
              <v-card-text
              >Vehicle Name:{{user.vehicle.name}}</v-card-text>
                <v-card-text>Brand:{{user.vehicle.brand}}</v-card-text>
        
             </v-row>
             <v-row>
             <v-card-text>Vehicle color:{{user.vehicle.color}}</v-card-text>
          
          
              <v-card-text>Vehicle Number:{{user.vehicle.vehicleNo}}</v-card-text>
          
        
               <v-card-text>Seats:{{user.vehicle.capacity}}</v-card-text>
          
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
</style>