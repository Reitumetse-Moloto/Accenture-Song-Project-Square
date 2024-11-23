const express = require('express');
const Brand = require('./brandModel');

const {
  connectDB,
  gfs,
  upload
} = require("./db");

const cors = require('cors');
const app = express();

app.use(cors());

connectDB();

app.use(express.json());

//solution 1 to retrieve brands
app.post("/upload", upload.single("file"), async (req, res) => {
  try {

    const collection = connectDB.collection("images");

    const imageData = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };
    await collection.insertOne(imageData);

    res.status(201).send({
      file: req.file,
      message: "File uploaded successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }

});

app.get("/file/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({
      filename: req.params.filename
    });
    if (!file) {
      return res.status(404).json({
        message: "File not found"
      });
    }

    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//solution 2 to retrieve brands
app.get('/brands', async (req, res) => {
  try {
    const brands = await Brand.find();

    const transformedBrands = brands.map((brand) => ({
      name: brand.name,
      logoURL: brand.logoUrl,
      isPublished: brand.isPublished
    }));
    res.json(transformedBrands);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));