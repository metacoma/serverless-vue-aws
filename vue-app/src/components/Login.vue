<template>
  <div class="login">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Courses</h3>
    </md-toolbar>
   <form novalidate class="login md-alignment-top-center" @submit.prevent="login">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Auth</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="email">email</label>
                <md-input name="email" v-model="email" id="email" />
              </md-field>
              <md-field>
                <label for="password">password</label>
                <md-input name="password" id="password" v-model="password" type="password" />
              </md-field>
              <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
              </md-card-actions>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  methods: {
    login: function () {
        axios({ method: "GET", "url": "https://1xqx3jhp01.execute-api.us-east-2.amazonaws.com/prod/user", params: {"user": this.email, 'password': this.password} }).then(result => {
                console.log(result.data)
                if (result.data.Item) {
                  //this.currentComponent = this.component.User
                  window.location.hash = "/User"
                  console.log("AUTH")
                } else {
                  console.log("NOAUTH")
                }
            }, error => {
                console.error(error);
            });
       }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}

.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
