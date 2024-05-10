import express from "express";

const router = express.Router();

// Define your routes here

router.get("/test", (req, res) => {
  res.json({
    message: "WAR wuu shaqeeyay",
  });
});

export default router;
