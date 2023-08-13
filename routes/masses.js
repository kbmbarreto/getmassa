module.exports = app => {
    const Masses = app.models.masses;

    app.route('/masses')
        .get(async (req, res) => {
            try {
                const result = await Masses.findAll();
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Masses.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/masses/:id')
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                const result = await Masses.findOne({where});
                if (result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .put(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Masses.update(req.body, {where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Masses.destroy({where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
};