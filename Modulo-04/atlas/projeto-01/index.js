const MongoClient = require('mongodb').MongoClient;

const uri = 
  "mongodb+srv://@bootcamp.c4xzu.mongodb.net/<dbname>?retryWrites=true&w=majority";

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
