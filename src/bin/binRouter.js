const Router = require("@koa/router")
const BinController = require("./binController");
const validation = require("../middleware/validation");
const binValidation = require("./binValidation")

const BinRouter = new Router();

BinRouter.post('/', validation(binValidation.addToBin), BinController.addToBin);
BinRouter.delete('/',validation(binValidation.deleteFormBin), BinController.deleteFromBin);
BinRouter.get('/', BinController.getBinList);

module.exports = BinRouter;
