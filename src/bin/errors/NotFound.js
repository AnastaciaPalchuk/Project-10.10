class NotFound extends Error{
    constructor(){
        super('Item is not found')
    }
}
module.exports = { NotFound };
