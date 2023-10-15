import mongoose from "mongoose";

export default function connectDB() {
  const url = "mongodb://127.0.0.1/blog_db";
  // const url = "mongodb+srv://user1233:password_111@cluster0.iyfcsja.mongodb.net/next-mongo?retryWrites=true&w=majority";

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}