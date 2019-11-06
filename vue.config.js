const bodyParser =require("body-parser")
const  data=require("./src/data/list.json")
const  user =require("./src/data/user.json")

module.exports={
    devServer:{
      before(app){
          // 登录接口
            app.post("/login", bodyParser.json(),(req,res)=>{
                let {paw, yong}=req.body
                let obj = user.find(item => item.name == yong)
             if(!obj){
                 res.send({
                     code:0,
                     msg:"登录失败,请重新登录"
                 })
             } else if (obj.pwd != paw){
                 res.send({
                     code: 0,
                     msg: "登录失败,请重新登录"
                 })

             }else{
                 res.send({
                     code: 1,
                     msg: obj
                 })  
             }
               
            }),
            //  注册
   app.post("/registered",bodyParser.json(),(req,res)=>{
       let { username, namepaw}=req.body
      let flag=user.filter(item =>item.name==username)
      res.send({code:1,data:flag})
       if (flag) {
       res.send({
            code:0,
            msg:"此用户已存在"
        })
    }else{ let obj = {
            "id": new Date()*1,
            "name": username,
            "nick": "马云",
            "pwd": namepaw,
            "avator": "mayun.png",
            "age": 18
        }
        user.push(obj) 
        res.send({code:1,msg:"注册成功"})
 
    }
      
   })
      }  




    }
}


