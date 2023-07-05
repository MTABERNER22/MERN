const productosModel = require("../models/productosModel");
const categoryModel = require("../models/categoriesModel");
const uploadImage = require("../utils/cloudinary")
const fs = require('fs-extra')

module.exports = {
    getAll: async function (req, res, next) {
        try {
            //datos enviados por query string '?'
            console.log(req.query)

            const documents = await productosModel.find({ name: { $regex: `.*${req.query.buscar || ''}.*` }, destacado: true }).select("name price category  url").sort({ price: -1 }).populate("category")
            res.status(200).json(documents);
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
        }
    },
    getById: async function (req, res, next) {
        try {
            console.log(req.params.id)
            const document = await productosModel.findById(req.params.id)
            res.status(200).json(document);
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
        }
    },
    getCategoryById: function (req, res, next) {
        console.log(req.params.id);
        console.log(req.params.categoriaId);
        const producto = {
            id: 1,
            name: "moto g"
        };
        res.status(200).json(producto);
    },
    create: async function (req, res, next) {
        try {
            const categoryDocument = await categoryModel.findByIdAndValidate(req.body.category)
            if (categoryDocument?.error === true) {
                return res.status(400).json()
            }
           
            console.log(req.body, req.body.userId);
       
            //Insertar en base de datos
            const producto = new productosModel({
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                quantity:req.body.quantity,
                category:req.body.category,
                destacado: req.body.destacado,

    
            })

         
            if(req.files?.url){
                const results = await uploadImage(req.files.url.tempFilePath)
                 producto.url = results.url
               await fs.unlink(req.files.url.tempFilePath)
             }

            const document = await producto.save()
            res.status(201).json(document)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }

    },
    update: async function (req, res, next) {
        console.log(req.params.id)
        console.log(req.body)

        try {
            const result = await productosModel.updateOne({ _id: req.params.id }, req.body)

            res.status(201).json(result)
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
        }
    },
    delete: async function (req, res, next) {
        try {
            const result = await productosModel.deleteOne({ _id: req.params.id })
          
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
        }
    }
}