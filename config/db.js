const mongoose =require("mongoose");
const env =require("dotenv")
env.config()

const db = async () => {
    
    try {
        const connection_url = process.env.DATABASE_URL;
        await mongoose.connect(connection_url).then((e) => {
            console.log("Db Connected")
        }, (err) => {
            console.log(err)
        })
    }catch(error){
        console.log(error)
    }
}

db();