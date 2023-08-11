module.exports = app => {
    const versions = app.models.versions;

    app.get('/versions', (req, res) => {
        versions.findAll({}, (data) => {
            res.json({versions: data});
        });
    });
}