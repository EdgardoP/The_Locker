const controller = {};

controller.menuEmpleados = (req, res) => {
    res.render('menuEmpleados')
}
controller.controlUsuarios = (req, res) => {
    res.render('controlUsuarios');
}


module.exports = controller;