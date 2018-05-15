<template>
  <div class="VmDetail">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Courses</h3>
    </md-toolbar>
    VMBOOT
  <div>
    <md-list>
      <md-list-item>{{ publicIpAddr }}</md-list-item>
      <md-list-item>{{ username }}</md-list-item>
      <md-list-item>{{ privateKey }}</md-list-item>
    </md-list>
    <md-card-actions>
      <md-button type="submit" class="md-primary" v-on:click="vmDetail">Vm detail</md-button>
    </md-card-actions>
  </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'VmBoot',
  /*
  data: function() {
    return {
      'publicIpAddr': '',
      'username': '',
      'privateKey': ''
    }
  },
  */
  data: function() {
    return {
      'publicIpAddr': '',
      'username': '',
      'privateKey': ''
    }
  },
  created()  {
    this.vmDetailLoop()
  },
  methods: {
    vmDetail: function () {
        axios({ method: "GET", "url": "https://1xqx3jhp01.execute-api.us-east-2.amazonaws.com/prod/vmDetail", params: {'instanceId': this.$route.query.instanceId } }).then(result => {
          console.log("polling vmDetail")
          if (result.data.publicIp != '') {
            this.publicIpAddr = result.data.publicIp
            this.username = result.data.ssh.username
            this.privateKey = atob(result.data.ssh.privateKey)
            clearInterval(this.intervalid1)
          }
        }, error => {
          console.error(error)
        })
    },
    vmDetailLoop: function() {
      this.intervalid1 = setInterval(this.vmDetail, 3000);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
