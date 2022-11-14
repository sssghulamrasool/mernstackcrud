const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
router.post("/usersPost", userControllers.postRoutes);
router.get("/usersGet", userControllers.getRoutes);
router.put("/usersUpdate/:id", userControllers.updateRoutes);
router.delete("/usersUpdate/:id", userControllers.deleteRoutes);
module.exports = router;
