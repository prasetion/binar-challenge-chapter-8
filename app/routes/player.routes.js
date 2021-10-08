module.exports = (app) => {
  const players = require("../controllers/player.controller.js");

  var router = require("express").Router();

  // Player Endpoints
  router.post("/players", players.create);
  router.get("/players", players.findAll);
  router.get("/players/:id", players.findById);
  router.put("/players/:id", players.update);
  router.post("/players/exp/:id", players.getExperience);
  router.delete("/players/:id", players.delete);

  // swagger endpoints
  const swaggerJSON = require("../swagger.json");
  const swaggerUI = require("swagger-ui-express");
  app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

  // API prefix
  app.use("/api", router);
};
