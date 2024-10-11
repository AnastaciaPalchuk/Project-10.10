const { NotFound } = require("./errors/NotFound");

class BinService{
    constructor(repository){
        this.repository = repository;
    }

    async addToBin(name){
        return this.repository.addItemToBin(name);
    }

    async deleteItem(id){
        const findItem = await this.repository.findItem(id)
        if(findItem.rows.length){
            return this.repository.deleteItemFromBin(id);
        }
        else {
            throw new NotFound();    
        }
    }

    async getBinList(){
        return this.repository.getBinList();
    }
}

module.exports = { BinService };