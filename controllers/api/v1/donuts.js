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
    let name = req.body.name; // $_POST["name"]
    let email = req.body.email;
    let glaze = req.body.glaze;
    let image = req.body.image;
    let sprinkles = req.body.sprinkles;
    let amount = req.body.amount;
    let production = req.body.production;
    let donut = new Donut();
    donut.name = name;
    donut.email = email;
    donut.glaze = glaze;
    donut.image = image;
    donut.sprinkles = sprinkles;
    donut.image = image;
    donut.amount = amount;
    donut.production = production;
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
                        donut: name,
                        donut: email,
                        donut: glaze,
                        donut: sprinkles,
                        donut: image,
                        donut: amount,
                        donut: production,
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

//update donut by id
const updateId = (req, res) => {
    let id = req.params.id;
    let production = req.body.production;
    Donut.findByIdAndUpdate
    (id, {production: production}, (err, donut) => {
        if(err) {
            let result = {
                status: 'error',
                message: 'Error updating donut',
            };
            res.json(result);
        }
        else {
            let result = {
                status: 'success updating donut',
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
module.exports.updateId = updateId