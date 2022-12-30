import mongoose from "mongoose";
import express from "express";


mongoose.connect('mongodb+srv://admin:admin@inventorydb.bvw96.mongodb.net/?retryWrites=true&w=majority');
const ListingSchema = new mongoose.Schema({
  address: String,
  city: String,
  postalCode: String,
  price: Number,
  propertyType: String,
  description: String,
  rentalStatus: String,
  bedrooms: String,
  bathrooms: String,
  livingRooms: String,
  kitchens: String,
  facilities: String,
  rentalStyle: String,
  privateAccess: String,
  tenantPreferences: String,
  date: Date,
  name: String,
  email: String,
  phone: String,
  weChart: String,
  imageUrls: String
});

const Listing = mongoose.model("listing", ListingSchema);

const app = express();
const port = 3002;
app.use(express.json());

app.get("/api/real-estate", async (req, res) => {
  const search = await Listing.find({});
  res.status(200);
  res.json(search);
  res.end();
});

app.get("/api/real-estate/:id", async (req, res) => {
  const id = req.params.id;
  const search = await Listing.findOne({ _id: id });
  res.status(200);
  res.json(search);
  res.end();
});

app.post("/api/real-estate", (req, res) => {
  const data = req.body;
  try {
    // validateDate(data);
    const listingObject = new Listing(data);
    listingObject.save().then(() => console.log(data));
    res.status(200);
    res.end();
  } catch (e) {
    res.status(442);
    res.end();
  }
});

app.delete("/api/real-estate/:id", async (req, res) => {
  await Listing.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((e) => {
      res.status(442);
      res.end();
    });
});

app.patch("/api/real-estate/:id", async (req, res) => {
  const update = req.body;
  delete update._id;
  await Listing.replaceOne({ _id: req.params.id }, update)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch(() => {
      res.status(442);
      res.end();
    });
});

app.listen(port, () => console.log(`Listing Server listening on ${port}`));

