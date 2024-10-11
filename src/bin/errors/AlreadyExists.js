class AlreadyExists extends Error{
    constructor(){
        super('Item is already added to bin')
    }
}
module.exports = { AlreadyExists };
   