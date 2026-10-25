import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config()

const connectDB = async()=>{
    try{
        const connection = await mongoose.connect("mongodb://jayeshbadhe32_db_user:gJf9MeGapU3pph9l@ac-ecp6xq0-shard-00-00.xv5izmg.mongodb.net:27017,ac-ecp6xq0-shard-00-01.xv5izmg.mongodb.net:27017,ac-ecp6xq0-shard-00-02.xv5izmg.mongodb.net:27017/cold-mailer?ssl=true&replicaSet=atlas-ers6f1-shard-0&authSource=admin")
        console.log("Mongodb Connected")
    }
    catch(e){
        console.log(e.message)
    }
}
export default connectDB