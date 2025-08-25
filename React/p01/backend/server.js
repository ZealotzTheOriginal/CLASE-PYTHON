const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// --- Productos ---
app.get("/api/chistes", (req, res) => {
  const { q } = req.query;
  if (q) {
    const stmt = db.prepare(
      "SELECT * FROM chistes WHERE LOWER(chiste) LIKE ? ORDER BY id DESC"
    );
    return res.json(stmt.all(`%${q.toLowerCase()}%`));
  }
  const stmt = db.prepare("SELECT * FROM chistes ORDER BY id DESC");
  res.json(stmt.all());
});

// --- Arranque ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});