const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
  firebaseLogin,
  checkUsername,
} = require("../controllers/userController");
const {protect} = require('../middlewares/authMiddleware')

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/firebaseLogin", firebaseLogin);
router.post("/checkusername", checkUsername);
router.get("/allusers/:id", getAllUsers);
// router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;