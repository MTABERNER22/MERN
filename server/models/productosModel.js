const mongoose = require("../config/mongodb");
const errorMessages = require("../utils/errorMessages");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, errorMessages.GENERAL.campo_obligatorio]
    },
    price:{
        type: Number,
        required:[true, errorMessages.GENERAL.campo_obligatorio],
        min: [0, errorMessages.GENERAL.minlenght],
      
    },
    description:String,
    quantity:Number,
    status:String,
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    destacado: Boolean,
    url: String
})

productSchema.virtual("price_currency").get(function(){
    return `$ ${this.price}`
});

productSchema.set("toJSON",{getters:true,virtuals:true});
productSchema.plugin(mongoose.mongoosePaginate);
module.exports = mongoose.model("productos",productSchema);