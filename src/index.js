const Koa = require("koa");
const Router = require("@koa/router");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
require("dotenv").config();
const config = require("./config/index");
const DataBase = require("./infra/database");

const BinRouter = require("./bin/binRouter");


async function main() {
  await DataBase.connect();

  const router = new Router();
  const app = new Koa();

  router.use('/bin', BinRouter.routes(), BinRouter.allowedMethods());

  app.use(cors());
  app.use(bodyParser());

  app.use(router.routes());
  app.listen(config.port, () => console.log(`Started on port ${config.port}`));
}
main();