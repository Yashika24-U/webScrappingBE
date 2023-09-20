import mongoose from 'mongoose'


const Connection =  ()=>{
    const DB_URI = `mongodb+srv://iamyashikau:yashi25062002@gmailclone.vrpx5l0.mongodb.net/`
    // const DB_URI = `mongodb://iamyashikau:yashi25062002@ac-zxq9zw9-shard-00-00.vrpx5l0.mongodb.net:27017,ac-zxq9zw9-shard-00-01.vrpx5l0.mongodb.net:27017,ac-zxq9zw9-shard-00-02.vrpx5l0.mongodb.net:27017/?ssl=true&replicaSet=atlas-o6u7g7-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       
       mongoose.connect(DB_URI, {useNewUrlParser : true})
        console.log(`Database connected sucessfully`)

    }catch(error)
    {
        console.log(`Error while connecting with database`,error.message)
    }
    
}

export default Connection

