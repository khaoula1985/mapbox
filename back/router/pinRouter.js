const{Router}=require("express")
const { getpins, getpinbyid, addpin, editpin, deletepin } = require("../controllers/pincontroller")
const pinRouter=Router()


pinRouter.get("/pin", getpins)
pinRouter.get("/pin/:id", getpinbyid)
pinRouter.post("/pin", addpin)
pinRouter.put("/pin/:id", editpin )
pinRouter.delete("/pin/:id", deletepin )

module.exports=pinRouter