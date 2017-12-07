<template>
  <div class="container">
    <div class="alert alert-danger" v-if="error">
      <strong>Error !</strong> Invalid Username or Password.
    </div>
    <form>
      <fieldset>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </br>
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">  
        </div>
        <div>
          <label>Already have an account? </label><router-link to="/signup">Sign up</router-link>
        </div>
        <div>
          <button type="button" class="btn btn-primary" v-on:click="isLogin">Sign in</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    isLogin () {
      axios.post('http://localhost:3000/api/users/signin',{
        email: this.email,
        password: this.password
      })
      .then(response => { console.log(response)})
    }
  }

}
</script>

<style>

</style>
