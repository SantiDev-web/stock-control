const validateStockData = (req, res, next) => {
    const body = req.body;

    // Verificar si el cuerpo de la solicitud está vacío
    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ message: "El cuerpo de la solicitud está vacío." });
    }

    const { nombre, categoria, cantidad, ubicacion, estado, descripcion } = body;

    // Verificar si faltan campos obligatorios
    if (!nombre || !categoria || !cantidad || !ubicacion || !estado || !descripcion) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Verificar si la cantidad es negativa
    if (cantidad < 0) {
        return res.status(400).json({ message: "La cantidad no puede ser negativa." });
    }

    next();
};

module.exports = validateStockData;
