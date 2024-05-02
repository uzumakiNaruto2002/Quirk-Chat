const Messages = require("../models/messageModel");
const Users = require("../models/userModel");
// const jwt = require("jsonwebtoken")
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const user = await Users.findById(to)
    // if (user.status === "Busy") {
    //   console.log("Busy");
    //   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    //   const prompt = `write only one response for ${message}`;

    //   const result = await model.generateContent(prompt);
    //   const response = await result.response;
    //   const text = response.text();

    //   const data = await Messages.create({
    //     message: { text: text },
    //     users: [from, to],
    //     sender: from,
    //   });
    //   console.log(data);
    //   if (data) return res.json({ msg: "Message added successfully."});
    //   else return res.json({ msg: "Failed to add message to the database" });
    // }
    
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};

module.exports.setStatus = async (req, res, next) => {
  try {
    const { id, status } = req.body;
    const data = await Users.findByIdAndUpdate(id, { status });
    if (data) return res.json({ msg: "Status updated successfully." });
    else return res.json({ msg: "Failed to update status." });
  } catch (ex) {
    next(ex);
  }
}