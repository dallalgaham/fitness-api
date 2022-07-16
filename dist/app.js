import express from "express";
const app = express();
const PORT = 1994;
app.get("/", (_, res)=>{
    res.status(200).send("Hello World ??");
});
app.listen(PORT, ()=>{
    console.log(`🚀 The app is listening to port: ${PORT} 🚀`);
});
