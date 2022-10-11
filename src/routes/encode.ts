import * as db from "../db";

async function routes(fastify) {
  fastify.post("/encode", async (req, rep) => {
    if (!req.body?.url) {
      return rep.status(401).send();
    }
    const id = await db.insertUrl(req.body.url);
    return {
      id,
    };
  });
}

module.exports = routes;
