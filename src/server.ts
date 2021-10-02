import express from "express";
import { getClub, getResultado } from "./database";

export default function createServer() {
  const app = express();
  app.get("/results/:team1/:team2", (req, res) => {
    try {
      let team1 = getClub(req.params.team1);
      let team2 = getClub(req.params.team2);
      let match = getResultado(team1, team2);
      if (match.score) {
        res.json({
          date: match.date,
          result: `${team1} ${match.score.ft[0]} - ${team2} ${match.score.ft[1]}`,
        });
      } else {
        res.json({
          date: match.date,
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json({
          error: e.message,
        });
      }
    }
    /* res.send(`Resultados del ${req.params.team1} vs ${req.params.team2}`); */
  });
  return app;
}
