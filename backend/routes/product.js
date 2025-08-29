const express = require("express");
const router = express.Router();
const db = require("../db");

// import auth middlewares
const { authenticateToken, requireAdmin } = require("../middleware/auth");

/**
 * @route   POST /products
 * @desc    Create a new product (Admin only)
 * @access  Private (Admin)
 */
router.post("/", authenticateToken, requireAdmin, async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
      [name, price, description]
    );

    res.json({
      message: "Product created successfully",
      productId: result.insertId,
    });
  } catch (err) {
    console.error("Error inserting product:", err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * @route   GET /products
 * @desc    Get all products (Any logged-in user)
 * @access  Private
 */
router.get("/", authenticateToken, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
