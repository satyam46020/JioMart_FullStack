const express=require("express")
const jwt=require("jsonwebtoken")

const UserLoginModel=require("./model/User.model")
const connection=require("./config/db")
const prod_top_Router=require("./Routes/prod_top.routes")

const app=express()
app.use(express.json())

app.post("/signup",async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await UserLoginModel.create({email,password})
        res.send(user)
    } catch (error) {
        res.send({msg:"Error signup"})
        console.log(error)
    }
})

app.post("/login",async (req,res)=>{
    try {
        const {email,password}=req.body;

        const user=await UserLoginModel.findOne({email,password})
        const token = jwt.sign({ user: 'new' }, 'masai',{ expiresIn: 60 * 60 });
        res.send(token)
    } catch (error) {
        res.send({msg:"login failed"})
    }
})
const validation=(req,res,next)=>{
    
    const token=req.headers.authorization?.split(" ")[1]
    jwt.verify(token, 'masai',function(err, decoded) {
        if(decoded){
            next();
        }
        else {
            res.send({msg:"login first"})
        }
      });
}

app.use("/prod_top",prod_top_Router)



app.listen(7000,async ()=>{
    try {
        await connection
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
        console.log("error connecting to mongodb")
    }
    console.log("listening to port 7000")
})
