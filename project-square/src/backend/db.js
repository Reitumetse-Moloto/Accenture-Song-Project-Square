const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

let gfs; 

const newStorage = multer.memoryStorage();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://molotoreitumetse:reitudb@cluster0.4dupt.mongodb.net/project-square?retryWrites=true&w=majority", {
    });
    console.log("MongoDB Connected...");
    const db = mongoose.connection.db; 
    gfs = Grid(db, mongoose.mongo); 
    gfs.collection("uploads");
  } catch (err) {
    console.error(err.message);
    process.exit(1); 
  }
};

const storage = new GridFsStorage({
  url: "mongodb+srv://molotoreitumetse:reitudb@cluster0.4dupt.mongodb.net/project-square?retryWrites=true&w=majority",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      filename: `${Date.now()}-${file.originalname}`, 
      bucketName: "images", 
    };
  },
});

const upload = multer({ storage: storage, field: 'file' });

module.exports = { connectDB, gfs, upload};