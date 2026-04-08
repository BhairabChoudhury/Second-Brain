import {ChromaClient} from "chromadb" ; 

const client = new ChromaClient() ; 

const COLLECTION_NAME = "second_brain" ; 

export const collection = async () =>{
    return await client.getOrCreateCollection({ name: COLLECTION_NAME });
}