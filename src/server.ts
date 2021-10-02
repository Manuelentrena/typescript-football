import express from "express";

export default function createServer() {
  const app = express();
  app.get("/results/:team1/:team2", (req, res) => {
    res.send(`Resultados del ${req.params.team1} vs ${req.params.team2}`);
  });
  return app;
}
