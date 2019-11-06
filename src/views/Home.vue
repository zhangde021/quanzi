<!--  -->
<template>
  <div class='home'>首页
  <router-view/>
  <div class="footer">
    <MyFooter></MyFooter>
  </div>
    
    
  </div>
</template>

<script>
import MyFooter  from "../components/MyFooter"
export default {
  name: 'home',
  data() {
    return {
    
    };
  },
  components: {
    MyFooter
  },
  computed: {
  },
  created() {
  
  },
  methods: {
  
  },
}
</script>
<style scoped>
html,body,.home{
  width: 100%;
  height: 100%;
}
.home{
  display: flex
}
.footer{
  width: 100%;
  height: 50px;
  background: red
}
</style>