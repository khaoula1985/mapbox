const Pin = require("../models/pin")


// 
module.exports.getpins= async (req,resp)=>{
const pins= await Pin.find();
return(
    resp.status(200).json(pins)
)}
//
module.exports.getpinbyid= async (req,resp)=>{
    const {id}=req.params
    const pin= await Pin.findById(id)

    return(
        resp.status(200).json(pin)
    )}

module.exports.addpin=(req,resp)=>{
    const{username,title, description,rating,lat,long }=req.body
    const pinadded= new Pin({
        username,title, description,rating,lat,long
    })
    pinadded.save()
    .then(()=>{return resp.status(200).json({msg:"pin added"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}

module.exports.editpin=(req,resp)=>{
    const{username,title, description,rating,lat,long}=req.body
    const {id}=req.params
    Pin.findByIdAndUpdate(id,{username,title, description,rating,lat,long})
    .then(()=>{return resp.status(200).json({msg:"pin updated"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}
module.exports.deletepin=(req,resp)=>{
    const {id}=req.params
    PictureInPictureEvent.findByIdAndDelete(id)
    .then(()=>{return resp.status(200).json({msg:"pin deleted"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}