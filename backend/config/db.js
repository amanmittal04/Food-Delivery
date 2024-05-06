import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://amanmittal0210:aman1234@cluster0.3klamgl.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}