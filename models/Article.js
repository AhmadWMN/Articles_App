import { Schema, model } from "mongoose";



const ArticleSchema = new Schema({
   
    title: string,
    imageURL: string,
    author: string,
    pages: number,
    body: string,
    generes: string[[null]],
    rating: number
  
});

export default model("Article", ArticleSchema);