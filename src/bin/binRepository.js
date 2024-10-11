class BinRepository{
    constructor(database){
        this.database = database;
    }

    async addItemToBin(name){
        return this.database.query(`
            insert into bin (name) 
            VALUES ('${name}')
            returning *;
            `);
    }

    async findItem(id){
        return this.database.query(`
            SELECT *
            from bin
            where id = ${id}
            `)
    }

    async deleteItemFromBin(id){
        return this.database.query(`
            DELETE
            from bin
            where id = ${id}
            `)
    }

    async getBinList(){
        return this.database.query(`
            SELECT *
            from bin
            `)
    }
}

module.exports = { BinRepository };
