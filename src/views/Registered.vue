<!--  -->
<template>
    <div class='registered'>
        
<input type="text" v-model="username"/>
<input type="password" v-model="namepaw" />
        <button @click="reg" >注册</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'registered',
    data() {
        return {
        username:"",
        namepaw:""
        };
    },
    components: {
    },
    computed: {
    },
    created() {
    },
    methods: {
     reg(){
          if(!this.username.trim()||!this.namepaw.trim()){
            alert("请输入账户或密码")
        }else {
            axios.post("/registered",{username:this.username,namepaw:this.namepaw}).then((res)=>{
                console.log(res.data)
            })
        }
     }
    },
}
</script>
<style scoped lang='scss'>

</style>