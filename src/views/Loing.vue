<!--  -->
<template>
    <div class='loing'>
<input type="text" v-model="yong"/>
<input type="password" v-model="paw" />
<button @click="submit">登录</button>

    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'loing',
    data() {
        return {
        paw:"",
        yong:""
        };
    },
    components: {
    },
    computed: {
    },
    created() {
    
    },
    methods: {
    submit(){
       
        if(!this.paw.trim()||!this.yong.trim()){
            alert("请输入账户或密码")
        }else{
              axios.post("/login",{paw:this.paw,yong:this.yong}).then(({data})=>{
            //    console.log(res)
            console.log(data)
            if(data.code==0){
                alert("登录失败,请重新登录")
                this.$router.push("/registered")
            }else{
                this.$router.push("/home")
            }

      })
        }
    
    }
    },
}
</script>
<style scoped>

</style>