module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.read_inventory()
            .then(products => {
                res.status(200).send(products);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    postInventory: (req, res) => {
        const db = req.app.get('db');

        const {name, price, imgUrl} = req.body;

        // console.log(name, price, imgUrl);

        db.create_inventory(name, price, imgUrl)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send(err);
            });

        // res.status(200).send('working as it should');
    },
    deleteInventory: (req, res) => {
        const db = req.app.get('db');

        const {id} = req.params;

        db.delete_inventory(id)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => res.status(500).send(err));
    },
    putInventory: (req, res) => {
        const db = req.app.get('db');
        
        const {id} = req.params;
        const {name, price, imgUrl} = req.body;

        db.update_inventory(id, name, price, imgUrl)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => res.status(500).send(err));
    } 
}