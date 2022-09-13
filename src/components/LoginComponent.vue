<template>
  <div class="login-container">
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="login-heading">
          <h2 class="heading">Login</h2>
        </div>
        <div class="form-input">
          <v-text-field
            v-model="user.username"
            :rules="[rules.required, rules.min, rules.max, rules.name]"
            label="User Name"
            color="black "
            required
          ></v-text-field>
        </div>
        <div class="form-input">
          <v-text-field
            v-model="user.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.minpass, rules.maxpass]"
            :type="show ? 'text' : 'password'"
            name="input-15-1"
            label="Password"
            color="black"
            @click:append="show = !show"
          ></v-text-field>
        </div>
        <div class="form-input">
          <div class="centre">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4" small
              @click="validate"
            >
              Login
            </v-btn>
            <v-btn small color="error" class="mr-4"  @click="reset"> Reset </v-btn>
          </div>
        </div>
      </v-form>
    </template>
  </div>
</template>


<script src="./scripts/LoginComponent.js"></script>


<style scoped>
.heading {
  text-align: center;
  width: 100%;
}
.login-container {
  background-color: #ffffff;
  padding: 1em 1.5em;
  border-radius: 1em;
  width: 40%;
  height: 45vh;
  min-height:420px;
  font-size: small;
}
.centre {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-size: x-small;
}
.form-input {
  margin-bottom: 30px;
  margin-top: 35px;
  font-size: small;

}
.login-heading {
    display:flex;
    flex-flow:row nowrap;
}
@media screen and (min-width: 450px) and (max-width: 1000px) {
  .login-container {
    width: 65%;
    height: 45vh;
  }
  .mr-4 {
    font-size: x-small;
    height: 30px !important;
    margin-bottom: 10px;
  }
  .form-input {
    margin-bottom: 30px;
    margin-top: 30px;
  }
}
@media screen and (max-width: 450px) {
  .login-container {
    width: 90%;
    height: 45vh;
  }
  .mr-4 {
    font-size: x-small;
    height: 30px !important;
    margin-bottom: 10px;
  }

  .form-input {
    margin-bottom: 30px;
    margin-top: 10px;
  }
}
</style>