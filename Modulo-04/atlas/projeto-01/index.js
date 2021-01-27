import dotenv from 'dotenv';

dotenv.config();

const MongoClient = require('mongodb').MongoClient;

const uri = 
  `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.c4xzu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(async (err) => {
  const collection = client.db("grades").collection("student");
  
  const documents = await collection.find({subject: 'Historia'}).toArray();

  // console.log(documents);

  const databaselist = await client.db().admin().listDatabases();

  console.log('Databases: ');

  databaselist.databases.forEach(db => {
    console.log(` - ${db.name}`);
  });

  client.close();
});
