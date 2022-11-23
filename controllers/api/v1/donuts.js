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

module.exports.getAll = getAll
module.exports.create = create