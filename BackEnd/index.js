const express=require("express")
const jwt=require("jsonwebtoken")

const UserLoginModel=require("./model/User.model")
const connection=require("./config/db")
const prod_top_Router=require("./Routes/prod_top.routes")
const admin_Router=require("./Routes/admin.routes")
const alldata_Router=require("./Routes/alldata.routes")
const baverage_Router=require("./Routes/baverage.routes")
const blogs_Router=require("./Routes/blogs.routes")
const books1_Router=require("./Routes/books1.routes")
const carousel_Router=require("./Routes/carousel_idvPage.routes")
const cart_Router=require("./Routes/cart.routes")
const electronics_Router=require("./Routes/electronics.routes")
const fruitsAndVegetables_Router=require("./Routes/fruitsAndVegetables.routes")
const imagesslider_Router=require("./Routes/imagesslider.routes")
const imagesslider1_shop_Router=require("./Routes/imagesslider1_shop.routes")
const imagesslider3_living_Router=require("./Routes/imagesslider3_living.routes")
const imagesslider4_fashion_Router=require("./Routes/imagesslider4_fashion.routes")
const imagesslider5_Makeup_Router=require("./Routes/imagesslider5_Makeup.routes")
const imagesslider6_Baby_Router=require("./Routes/imagesslider6_Baby.routes")
const img_crau1_Router=require("./Routes/img_crau1.routes")
const img_crau2_Router=require("./Routes/img_crau2.routes")
const img_crau3_Router=require("./Routes/img_crau3.routes")
const img_crau4_Router=require("./Routes/img_crau4.routes")
const indivisualPageData_Router=require("./Routes/indivisualPageData.routes")
const jioMart_Router=require("./Routes/jioMart.routes")
const prod_Dairy_Router=require("./Routes/prod_Dairy.routes")
const prod_Kitchen_Router=require("./Routes/prod_Kitchen.routes")
const prod_Make_Router=require("./Routes/prod_Make.routes")
const prod_Phone_Router=require("./Routes/prod_Phone.routes")
const singleImage_Router=require("./Routes/singleImage.routes")
const singleimage1_Detergents_Router=require("./Routes/singleimage1_Detergents.routes")
const singleimage3_Bodycare_Router=require("./Routes/singleimage3_Bodycare.routes")
const singleimage4_bigphone_Router=require("./Routes/singleimage4_bigphone.routes")
const singleimage5_outfit_Router=require("./Routes/singleimage5_outfit.routes")
const singleimage6_beauty_Router=require("./Routes/singleimage6_beauty.routes")
const {authRouter} =require("./Routes/Auth.route")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors({origin:'*'}))

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

app.use("/admin",admin_Router)
app.use("/alldata",alldata_Router)
app.use("/baverage",baverage_Router)
app.use("/blogs",blogs_Router)
// app.use("/books1",books1_Router)
app.use("/carousel_idvPage",carousel_Router)
app.use("/cart",cart_Router)
app.use("/electronics",electronics_Router)
app.use("/fruitsAndVegetables",fruitsAndVegetables_Router)
app.use("/imagesslider",imagesslider_Router)
app.use("/imagesslider1_shop",imagesslider1_shop_Router)
app.use("/imagesslider3_living",imagesslider3_living_Router)
app.use("/imagesslider4_fashion",imagesslider4_fashion_Router)
app.use("/imagesslider5_Makeup",imagesslider5_Makeup_Router)
app.use("/imagesslider6_Baby",imagesslider6_Baby_Router)
app.use("/img_crau1",img_crau1_Router)
app.use("/img_crau2",img_crau2_Router)
app.use("/img_crau3",img_crau3_Router)
app.use("/img_crau4",img_crau4_Router)
app.use("/indivisualPageData",indivisualPageData_Router)
app.use("/jioMart",jioMart_Router)
app.use("/prod_Dairy",prod_Dairy_Router)
app.use("/prod_Kitchen",prod_Kitchen_Router)
app.use("/prod_Make",prod_Make_Router)
app.use("/prod_Phone",prod_Phone_Router)
app.use("/prod_Dairy",prod_Dairy_Router)
app.use("/prod_top",prod_top_Router)
app.use("/Singleimage",singleImage_Router)
app.use("/Singleimage1_Detergents",singleimage1_Detergents_Router)
app.use("/Singleimage3_Bodycare",singleimage3_Bodycare_Router)
app.use("/Singleimage4_bigphone",singleimage4_bigphone_Router)
app.use("/Singleimage5_outfit",singleimage5_outfit_Router)
app.use("/Singleimage6_beauty",singleimage6_beauty_Router)
app.use("/auth", authRouter);



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
