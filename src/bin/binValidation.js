const { z } =  require("zod");

const addToBin = z.object({
    name: z.string()
})

const deleteFormBin = z.object({
    id: z.number().int().nonnegative()
})

module.exports = {addToBin, deleteFormBin};