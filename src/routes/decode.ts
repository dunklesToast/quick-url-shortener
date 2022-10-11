import * as db from "../db";

async function routes(fastify) {
  fastify.get("/decode/:id", async (req, rep) => {
    if (!req.params.id) {
      return rep.status(404).send();
    }
    return db.findShortened(req.params.id);
  });
}

module.exports = routes;
