//setting APIs and routers
// PARENT ROUTER FOR ANY ROUTES
const userRoute = require("./user-route/user-routes");
const router = require("express").Router();
const apiRoutes = require("./api/flashcardInfo");
// LINE 3 NEEDS ADDITIONAL PATH DIRECTIONS AFTER './api'. currently importing folder, but no file

//setting destination//
router.use("/api", apiRoutes);
router.use("/user", userRoute);

module.exports = router;
