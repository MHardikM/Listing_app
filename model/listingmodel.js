const mongoose=require("mongoose")

const listeningschema=new mongoose.Schema({
    title:String,
    price:String,
    locality:String,
    details:String,
});

module.exports=mongoose.model("listingmodel",listeningschema);