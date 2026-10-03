import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`app listening to port: ${PORT}`);
  connectDB();
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database");
  } catch (err) {
    console.log("Failed to connnect with Db", err);
  }
};

// app.post("/test", async (req, res) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "openrouter/free",
//       messages: [{ role: "user", content: req.body.message }],
//     }),
//   };

//   try {
//     const response = await fetch(
//       "https://openrouter.ai/api/v1/chat/completions",
//       options,
//     );
//     const data = await response.json();
//     // console.log(data.choices[0].message.content);
//     res.send(data.choices[0].message.content);
//   } catch (err) {
//     console.log(err);
//   }
// });
