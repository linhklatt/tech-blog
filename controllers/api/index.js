const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./postRoutes");
const projectRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/posts", projectRoutes);
router.use("/comments", projectRoutes);

module.exports = router;
