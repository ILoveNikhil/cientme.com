import { app } from "./app.js";
import { connectDB } from "./config/db.js";
// import cloudinary from "cloudinary";

// connect database
connectDB();

// cloudinary -- not working now
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// server is working
app.get("/", (req, res) => {
  res.send(`<h1> Server is Working </h1>`);
});

// listen
app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
