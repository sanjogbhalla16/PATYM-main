//we will the schema for our app
//we use mongodb
/*
user signin ke liye kasa table hoga

{
    email:string
    password:string
}
*/
const mongoose = require("mongoose");
// const { Schema } = mongoose;

mongoose.connect(
  "mongodb+srv://sanjogbhalla:Cosmos1622@cluster0.l7ccths.mongodb.net/paytm"
);

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

/*
In MongoDB, documents stored in a collection require a unique _id field that acts as a primary key. 
MongoDB uses ObjectIds as the default value for the _id field if the _id field is not specified; i.e. 
if a document does not contain a top-level _id field, the MongoDB driver adds the _id field that holds 
an ObjectId. In addition, if the mongod receives a document to insert that does not contain an _id field, 
mongod will add the _id field that holds an ObjectId.

In Mongoose, Schema.Types.ObjectId is a special data type used to define a field in a schema that will 
store MongoDB ObjectIDs. MongoDB ObjectIDs are unique identifiers automatically generated by MongoDB 
for each document in a collection.
*/

const accountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, //reference to User Model , taken from the User table
    ref: "User", //this ref works as a foreign key as provides a reference to the User model
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const account = model("Account", accountSchema);
//then make the model for this schema and export it
const user = model("Users", userSchema); //Users here is the naming convention for userSchema

//this is what you want
export default {
  user, //we export the model that we have made
  account,
};
