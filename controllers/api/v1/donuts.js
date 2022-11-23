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

module.exports.getAll = getAll