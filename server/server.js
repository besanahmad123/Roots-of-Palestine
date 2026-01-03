const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// نقطة رئيسية للتأكد أن السيرفر شغال
app.get("/", (req, res) => {
  res.send("السيرفر شغال ✅ جربي /messages لعرض الرسائل");
});

// نقطة استقبال الرسائل من الفورم
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  let messages = [];
  if (fs.existsSync("messages.json")) {
    const data = fs.readFileSync("messages.json");
    messages = JSON.parse(data);
  }
  

  const newMessage = { name, email, message, date: new Date() };
  messages.push(newMessage);

  fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));

  console.log("📩 رسالة جديدة تم حفظها:", newMessage);
  res.json({ success: true, msg: "تم استلام الرسالة وحفظها في ملف JSON" });
});



// نقطة لعرض كل الرسائل المخزنة
app.get("/messages", (req, res) => {
  if (fs.existsSync("messages.json")) {
    const data = fs.readFileSync("messages.json");
    const messages = JSON.parse(data);
    res.json(messages);
  } else {
    res.json({ msg: "ما في رسائل محفوظة لحد الآن" });
  }
});

app.listen(4000, () => {
  console.log("API  شغال على http://localhost:4000");
});