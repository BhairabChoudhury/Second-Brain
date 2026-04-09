import {collection} from "./aiservics" ; 
export const  storeEmbedding = async (contentId : string , text:string ) =>{
      try {
    const COLLECTION = await collection();  
 console.log(contentId , "content id") ;
 console.log(text , "text") ;
    await COLLECTION.add({
      ids: [contentId],
      documents: [text], // Chroma auto-embedding
    });
const result = await COLLECTION.get();
console.log(result);
  } catch (error) {

    console.error("Embedding store error:", error);
  }
  
} 