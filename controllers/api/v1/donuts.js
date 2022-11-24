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
    let donut = new Donut();
    donut.name = name;
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
                    },
                };
                res.json(result);
            }
        });
}

//get donut by id
const getId = (req, res) => {
    const id = req.params.id
    res.json({
        "status": "success",
        "message": "GETTING donut with id ${id}",
        "data": {
            "donut": {
                "name": "Glazed",
            }
        }
    })
}

module.exports.getAll = getAll
module.exports.create = create
module.exports.getId = getId