const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// 🔥 SALVAR NO MYSQL
app.post("/resultados", (req, res) => {
  const { result } = req.body;

  const sql = `
    INSERT INTO resultados
    (mainArea, percent, careers, level, user_id)
    VALUES (?, ?, ?, ?, ?)
  `;

  const values = [
    result.title,
    result.percent,
    JSON.stringify(result.careers || []),
    result.level || "Básico",
    1
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao salvar" });
    }

    res.json({
      message: "Salvo com sucesso 🚀",
      id: data.insertId
    });
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});