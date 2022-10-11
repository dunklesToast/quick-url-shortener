import fastify from "fastify";
import * as db from "./db";

(async () => {
  const server = fastify();

  await db.init();

  server.register(require("./routes/encode"));
  server.register(require("./routes/decode"));
  server.register(require("./routes/redirect"));

  await server.listen(1337, "0.0.0.0");
  console.log("Ready");
})();
