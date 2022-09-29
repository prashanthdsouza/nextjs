import { MongoClient } from "mongodb";

// api/new-meetup
// POST/api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:V@6s344rje3#n$K@cluster0.dqfrpf2.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });
    //

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
