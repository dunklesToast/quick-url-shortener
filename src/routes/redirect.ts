import * as db from "../db";

async function routes(fastify) {
  fastify.get("/r/:id", async (req, rep) => {
    if (!req.params.id) {
      return rep.status(404).send();
    }
    const { target } = await db.findShortened(req.params.id);
    return rep.redirect(301, target);
  });
}

module.exports = routes;
