import { MongoClient } from "mongodb";
import { config } from "dotenv";
import process from "process";
config();

// Replace the uri string with your connection string.
const pass = process.env.PASS;
const uri = `mongodb+srv://lightwing2208:${pass}@cluster0.uvhqfkq.mongodb.net/`;

class DataBaseService {
  constructor() {
     this.client = new MongoClient(uri);
    this.db=this.client.db(process.env.DATANAME)
  }
    run() {
    try {
           this.client.connect();
    //   const users = database.collection("user");
    //   const query = { title: "Back to the Future" };
    //   const movie = await users.findOne(query);
        
    } catch(error) {
      // Ensures that the client will close when you finish/error
      console.log("error",error);
    }
  }
   test1(){
    return this.db.collection("test1");
  }
 
}

export const databaseUnit=new DataBaseService();