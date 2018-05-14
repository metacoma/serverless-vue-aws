<template>
  <div class="User">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Courses</h3>
    </md-toolbar>
   <form novalidate class="login md-alignment-top-center" @submit.prevent="bootvm">
        <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="movie">Choose step</label>
          <md-select v-model="step" name="step" id="step">
            <md-option value="Step1">Step 1: Clean ubuntu</md-option>
            <md-option value="Step2">Step 2: Installed docker</md-option>
            <md-option value="Step3">Step 3: Installed minikube</md-option>
          </md-select>
        </md-field>
        </div>
      </div>
      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="sending">Boot VM</md-button>
      </md-card-actions>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'User',
  methods: {
    bootvm: function () {
        axios({ method: "GET", "url": "https://1xqx3jhp01.execute-api.us-east-2.amazonaws.com/prod/vm", params: {"step": this.step } }).then(result => {
              console.log(result.data)
            }, error => {
                console.error(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
