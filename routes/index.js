const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

// API Routes any route starting with '/api'
router.use("/api", apiRoutes);

// =========== SEND REACT PRODUCTION BUILD ====================
router.get("*", (req, res) => {
    if (process.env.NODE_ENV === "production") {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    }
    else{ 
        console.log("Attempted to send Production build.")
        res.status(400);
    }
});

module.exports = router;