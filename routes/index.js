const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

// API Routes any route starting with '/api'
router.use("/api", apiRoutes);

// =========== SEND REACT PRODUCTION BUILD ====================
router.get("*", (req, res) => {
    console.log("Attempting to Send production build");
    if (process.env.NODE_ENV === "production") {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    }
    res.status(400);
});

module.exports = router;