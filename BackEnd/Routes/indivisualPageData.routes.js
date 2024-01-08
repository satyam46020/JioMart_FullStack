const express=require("express")

const IndividualPageDataModel=require("../model/IndivisualPageData.model")

const individualPageData_Router=express.Router();

individualPageData_Router.get("/",async (req,res)=>{
    try {
        const product=await IndividualPageDataModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

// individualPageData_Router.put("/indivisualPageData", async (req, res) => {
//     try {
//       const payload = req.body; 
//       const individualPageData = new IndividualPageDataModel(payload);
//       await individualPageData.save();
  
//       res.status(200).send({ msg: "Data received successfully" });
//     } catch (error) {
//       console.error("Error receiving data from individual page:", error);
//       res.status(500).send({ msg: "Error receiving data" });
//     }
//   });

module.exports=individualPageData_Router

