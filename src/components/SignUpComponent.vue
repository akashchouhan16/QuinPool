<template>
  <div>
    <!-- <h1>Sign Up To Quinbay CarPool</h1> -->
    <v-card elevation="2" outlined shaped tile>
      <v-container class="register-card">
        <v-card-title> Register </v-card-title>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row cols="12">
            <v-col lg="6" md="12" sm="12">
              <v-text-field
                v-model="user.name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" md="12" sm="12">
              <v-text-field
                v-model="user.username"
                :rules="userNameRules"
                label="User Name"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" md="12" sm="12">
              <v-text-field
                v-model="user.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min, rules.pass, rules.max]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 5 characters"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
            <v-col lg="6" md="12" sm="12">
              <v-text-field
                v-model="user.cpassword"
                :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.pass, rules.max]"
                :type="show4 ? 'text' : 'password'"
                name="input-10-2"
                label="Confirm Password"
                hint="At least 5 characters"
                value=""
                @click:append="show4 = !show4"
              ></v-text-field>
              <span v-if="pass" class="errortext">password mismatch</span>
            </v-col>

            <v-col lg="9" md="12" sm="12">
              <v-text-field
                v-model="user.phone"
                :rules="phoneRules"
                label="Phone Number"
                required
              ></v-text-field>
            </v-col>

            <v-col lg="11" md="12" sm="12">
              <v-textarea
                rounded
                solo
                dense
                filled
                name="input-7-4"
                label="Address"
                v-model="user.address"
                :rules="addressrules"
              ></v-textarea>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-checkbox
                v-model="user.checkbox"
                label="Do you have a car"
                required
              ></v-checkbox>
              <span v-if="error" class="errortext">Enter all the fields</span
              ><br />
            </v-col>

            <v-row
              v-if="user.checkbox"
              cols="12"
              style="margin: -2px !important"
            >
              <v-col lg="12" md="12" sm="12">
                <v-text-field
                  v-model="user.vehicle.vehicleNumber"
                  :rules="numberrules"
                  label="Vehicle Number"
                  required
                ></v-text-field>
              </v-col>
              <v-col lg="6" md="12" sm="12">
                <v-text-field
                  v-model="user.vehicle.vehicleBrand"
                  :rules="vehicleRules"
                  label="Vehicle Brand"
                  required
                ></v-text-field>
              </v-col>
              <v-col lg="6" md="12" sm="12">
                <v-text-field
                  v-model="user.vehicle.vehicleName"
                  :rules="vehicleRules"
                  label="Vehicle Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col lg="6" md="12" sm="12">
                <v-text-field
                  v-model="user.vehicle.color"
                  :rules="colorRules"
                  label="Color"
                  required
                ></v-text-field>
              </v-col>
              <v-col lg="6" md="12" sm="12">
                <v-text-field
                  v-model="user.vehicle.seats"
                  :rules="seatingRules"
                  label="Seating Capacity"
                  required
                ></v-text-field>
              </v-col>
              <v-col lg="6" md="12" sm="12">
                <v-text-field
                  v-model="user.LicenseNumber"
                  :rules="LicenseNumberRules"
                  label="License Number"
                  required
                ></v-text-field>
              </v-col>
              <v-menu
                v-if="user.checkbox"
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    lg="6"
                    md="12"
                    sm="12"
                    v-model="user.date"
                    label="Valid Till"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="user.date"
                  :active-picker.sync="activePicker"
                  max="2090-01-01"
                  :min="new Date().toISOString().slice(0, 10)"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-row>

            <div class="reg-button">
              <v-row cols="12">
                <v-col lg="6" md="12" sm="12">
                  <v-btn
                    @click="register()"
                    color="black"
                    style="color: white"
                    block
                    elevation="2"
                    raised
                    rounded
                    >Register</v-btn
                  >
                </v-col>

                <!-- <v-col lg="6" md="12" sm="12">
                  <v-btn
                    @click="goLogin()"
                    color="#fc9403"
                    block
                    elevation="2"
                    raised
                    style="color: white"
                    rounded
                    >Login</v-btn
                  >
                </v-col> -->
              </v-row>
            </div>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script src="./scripts/SignUpComponent.js">
</script>

<style scoped>
.register-card {
  margin-top: 9%;
}
.v-card.v-sheet.v-sheet--outlined.v-sheet--shaped.theme--light.elevation-2.rounded-0 {
  border-radius: 13px !important;
  margin-left: 28%;
  max-width: 50%;
  margin-bottom: 10%;
}
.v-input.v-input--is-label-active.v-input--is-dirty.theme--light.v-input--selection-controls.v-input--checkbox.primary--text {
  margin-top: 7% !important;
}
.v-input--selection-controls {
  /* margin-top: 34px; */
  padding-top: 4px;
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
.errortext {
  color: red;
  text-align: center;
}
.v-input.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted {
  margin-top: 14px;
}

.v-btn--rounded {
  border-radius: 5px;
}
</style>