const { addMessage, getMessages, setStatus } = require("../controllers/messageController");
const router = require("express").Router();
const {protect} = require('../middlewares/authMiddleware')

router.post("/addmsg/", protect, addMessage);
router.post("/getmsg/", protect, getMessages);
router.post("/setstatus/", protect, setStatus);

module.exports = router;