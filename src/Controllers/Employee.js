const { EmployeeModel } = require('../Models');

class EmployeeController {
    
    constructor(){
        this.model = new EmployeeModel();
    }

    index = (req, res) => {
        this.model.getList()
            .then(data => {
                res.json(this.getJSONResponse({data}));
            })
            .catch(err => {
                console.log(err);
                res.json(this.getJSONResponse({error: "Hubo un problema en el servidor" }))
            });
    }

    record = (req, res) => {

        const { id } = req.params;
        this.model.get(id)
            .then(data => {
                res.json(this.getJSONResponse({data}));
            })
            .catch(err => {
                console.log(err);
                res.json(this.getJSONResponse({error: `No existe el empleado con el id ${id}` }))
            });

    }

    add = (req, res) => {

        const { name, salary } = req.body;

        this.model.add(name, salary)
            .then(data => {
                res.json(this.getJSONResponse({data}));
            })
            .catch(err => {
                console.log(err);
                res.json(this.getJSONResponse({error: "No se pudo agregar el empleado" }))
            });
    }

    edit = (req, res) => {

        const { name, salary } = req.body;
        const { id } = req.params;

        this.model.update(id, name, salary)
            .then(data => {
                res.json(this.getJSONResponse({data}));
            })
            .catch(err => {
                console.log(err);
                res.json(this.getJSONResponse({error: "No se pudo editar el empleado" }))
            });
    }


    getJSONResponse = ({data, error}) => {
        if(data){
            return {
                success: true,
                data
            }
        }
        if(err){
            return {
                success: false,
                msg: err
            }
        }
    }
}

module.exports = new EmployeeController();