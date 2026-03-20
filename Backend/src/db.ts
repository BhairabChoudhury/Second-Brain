// import { model ,Schema} from 'mongoose' 
//  import mongoose from 'mongoose';
// import { required } from 'zod/v4/core/util.cjs';
// const UserSchema = new Schema ({
//         username: { type: String, unique: true }, // Unique username to ensure no duplicates
//          password: { type: String }               // Password for the user
// })

// export const  UserModel = model("User",UserSchema) ;

// // Defining a schema for the 'Content' collection
// // Each content will have a 'title', a 'Link', an array of 'tags', and a reference to a 'userId'
//  const ContentSchema = new Schema({
//     title: String,                          // Title of the content
//     link: String,                           // URL or link to the content
//   //  tags: [{ type: mongoose.Types.ObjectId, ref: "tag" }], // Array of tag IDs, referencing the 'tag' collection
//     type :String ,
//     userId: { 
//         type: mongoose.Types.ObjectId, 
//         ref: "User", 
//         required: true                       // The 'userId' field is mandatory to link content to a user
//     },
// });
// const LinkSchema = new Schema({
//     // 'hash' is a string that represents the shortened or hashed version of a link
//     hash: String,

//     // 'userId' is a reference to the 'User' collection in the database.
//     // It uses Mongoose's ObjectId type for relational data.
//     // The 'ref' property specifies the referenced collection name ('User').
//     // The 'required' property ensures this field must be provided when creating a document.
//     // The 'unique' property enforces that each 'userId' in this collection is unique.
//     userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
// });

// export const LinkModel = model("Links",LinkSchema) ;

// // Creating a model for the 'Content' collection to interact with the database
// export const ContentModel = model("Content", ContentSchema);