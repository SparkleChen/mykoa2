const User = require('../model/users');

module.exports = {
     getUser:async function(ctx){
        const  name  = ctx.request.body;
        await  User.findOne({name:name.name}).then(data =>{
            ctx.body = {name:data.name,age:data.age,email:data.email};
        })},
      insertUser:async function(ctx){
          const  infomations  = ctx.request.body;
          const user = new User ({
              name: "chenlanlan",
              email: "supermap",
              age: "12"
          });
           await user.save().then(data=>{
               ctx.body = {"request":"success"} ;
           })
        }
};