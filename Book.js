const mongose=require("mongose")
const schema=mongose.Schema(
    {
        "name":String,
        "distributorName":String,
        "discrption":String,
        "publisher":String
    }
)

let Bookmodel=mongose.Model("Book",schema);
module.exports={Bookmodel}