//donuts
const getAll = (req, res) => {
    res.json({
        "status": "success",
        "message": "All donuts",
        "data": {
            "donuts": [
                {
                    "id": 1,
                    "name": "Glazed",

                },
                {
                    "id": 2,
                    "name": "Chocolate",
                
                }]
        }

    })
}

//create new donut
const create = (req, res) => {
    res.json({
        "status": "success",
        "message": "CREATING donut",
        "data": {
            "donut": {
                "name": "Strawberry"
        }
    }
})
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