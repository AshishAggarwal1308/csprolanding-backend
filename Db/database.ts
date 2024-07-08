import mongoose from "mongoose"


export const ConnectToDataBase = () => {
    mongoose.connect(process.env.MONGODB || "").then((e) => {
        console.log(`Database connected ${e.connection.host}`)
    }).catch((error) => {
        console.log(error.message);
    })
}