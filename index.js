const express = require('express')
const path=require("path")
const dotenv = require('dotenv')
const listingmodel=require("./model/listingmodel")
const app = express()
const verify=require("./router/verifytoken")
const cors=require("cors")

const mongoose=require("mongoose")
const port = 4000

dotenv.config();
//  app.use("",listingRoutes);
//  app.use(express.json())
 app.use(cors())
app.use(express.json())


// get method to get data from db
app.get('/', async (req,res)=>{
  try {
   const listingfind=await listingmodel.find()
   res.json(listingfind)
  } catch (error) {
   res.json({message:error})
   
  }
})

//post method to send data to db

app.post('/Addlisting',verify,  async (req, res) => {
  const listingfile=new listingmodel({
  title:req.body.title,
  price:req.body.price,
  locality:req.body.locality,
  details:req.body.details,
  });
  try {
      const savedListing=await listingfile.save()
      res.send(savedListing)
      
  } catch (error) {
      res.status(400).send(error)
  } 
})

// get method to get data by id

app.get('/:listingid',async(req,res)=>{
  try {
const listing=await listingmodel.findById(req.params.listingid);
res.json(listing);
    
  } catch (error) {
    res.status(404).send(error)
    
  }

})

//put method to update data of a db collection by id
app.put('/:listingid',verify, async(req,res)=>{
  try {
    const listing={
      title:req.body.title,
      price:req.body.price,
      locality:req.body.locality,
      details:req.body.details
      }

const updatelisting=await listingmodel.findByIdAndUpdate({_id:req.params.listingid},listing);
res.json(updatelisting);
    
  } catch (error) {
    res.status(404).send(error)
    
  }

})

// delete method using id 
app.delete('/:listingid',verify,async(req,res)=>{
  try {
    const removelisting= await listingmodel.findByIdAndDelete(req.params.listingid)
    res.json(removelisting)
    
  } catch (error) {
    res.json({message:error})
    
  }
})

const userroute=require('./router/user')
app.use('/api/user',userroute)



mongoose.connect(process.env.DB_CONNECT,()=>console.log("connected to db"))
 
  //   app.use('/static', express.static(path.join(__dirname, 'public')))
  //  app.use('/blog',express.static(path.join(__dirname,'blog')))
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
