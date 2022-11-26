//donuts
// require donut model
const Donut = require('../../../models/Donut');


const getAll = (req, res ) => {
    let donuts = Donut.find({}, (err, donuts) => {
        if(err) {
            let result = {
                status: 'error',
                message: 'Error getting toppings',
            };
            res.json(result);
        }
        else {
            let result = {
                status: 'success',
                data: {
                    donuts: donuts,
                },
            };
            res.json(result);
        }
    });
};

//create new donut
const create = (req, res ) => {
    let username = req.body.username;
    let email = req.body.email;
    let name = req.body.name; // $_POST["name"]
    //post the dough
    let dough = req.body.dough;
    //post the glaze
    let glaze = req.body.glaze;
    let donut = new Donut();
    donut.username = username;
    donut.email = email;
    donut.name = name;
    donut.dough = dough;
    donut.glaze = glaze;
    donut.save((err, donut) => {
        if(err) {
            console.log(err);
            let result = {
                status: "error",
                message: "Oops, couldn't save donut",
            };
            res.json(result);
            }
            else {
                let result = {
                    status: "success",
                    data: {
                        donut: username,
                        donut: email,
                        donut: name,
                        donut: dough,
                        donut: glaze
                    },
                };
                res.json(result);
            }
        });
}

//get donut by id
const getId = (req, res) => {
    let id = req.params.id;
    Donut.findById(id, (err, donut) => {
        if(err) {
            let result = {
                status: 'error',
                message: 'Error getting donut',
            };
            res.json(result);
        }
        else {
            let result = {
                status: 'success',
                data: {
                    donut: donut,
                },
            };
            res.json(result);
        }
    });
};

//delete donut by id
const deleteId = (req, res) => {
    let id = req.params.id;
    Donut.findByIdAndDelete(id, (err, donut) => {
        if(err) {
            let result = {
                status: 'error',
                message: 'Error deleting donut',
            };
            res.json(result);
        }
        else {
            let result = {
                status: 'success deleting donut',
                data: {
                    donut: donut,
                },
            };
            res.json(result);
        }
    });
};

module.exports.getAll = getAll
module.exports.create = create
module.exports.getId = getId
module.exports.deleteId = deleteId