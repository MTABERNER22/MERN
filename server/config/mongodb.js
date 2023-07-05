const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")
console.log(process.env.DB_HOST)
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Conectado")})
.catch((error=>console.log(error)))

mongoosePaginate.paginate.options = {
    limit:4
}

mongoose.mongoosePaginate = mongoosePaginate 

module.exports = mongoose