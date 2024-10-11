const { BinService } = require("./binService");
const DataBase = require("../infra/database");
const { BinRepository } = require("./binRepository");
const { AlreadyExists } = require("./errors/AlreadyExists");
const { NotFound } = require("./errors/NotFound");

class BinController {
  constructor(service) {
    this.service = service;
  }

  addToBin = async (ctx) => {
    const item = ctx.request.body;
    // console.log(item.name)
    try {
      const addItemToBin = await this.service.addToBin(item.name);
      ctx.body = { id: addItemToBin.rows[0].id };
    } catch (err) {
      if (err instanceof AlreadyExists) {
        ctx.status = 400;
        ctx.body = err.message;
        return;
      }
      throw err;
    }
  };

  deleteFromBin = async (ctx) => {
    const item = ctx.request.body;
    try {
      const deleteItem = await this.service.deleteItem(item.id);
      ctx.body = { deleted: true };
    } catch (err) {
      if (err instanceof NotFound) {
        ctx.status = 404;
        ctx.body = err.message;
        return;
      }
    }
  };

  getBinList = async(ctx) => {
        const list = await this.service.getBinList();
        ctx.body = { bin: list.rows };
  }

}

const repository = new BinRepository(DataBase);
const service = new BinService(repository);
module.exports = new BinController(service);
