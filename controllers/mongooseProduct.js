import Producto from '../models/productModels.js';

/* GET users listing. */
const mostrarFormulario = (req, res) => {
    res.render('mongooseProduct', {
        title: 'Registrar Producto'
    });
};

const cargarFormulario =  async (req, res) => {

    //desestructuramos los datos del body
    const { nombre, precio, imagen, stock } = req.body;
    
    try {
        
        const producto = new Producto({
            nombreProducto: nombre,
            precioProducto: precio,
            imagenProducto: imagen,
            stockProducto: stock
        });
        
        console.log(producto);

        await producto.save()

        return res.send(producto);

    } catch (error) {
        console.log(error);
        return res.render({
            message: error
        });

    }

};


export {
    mostrarFormulario,
    cargarFormulario
};