module.exports = app => {
    async function start(port) {
        try {
            await app.db.authenticate();
            await app.db.sync();
            app.listen(app.get('port'), () => {
                console.log(`GetMassa - Port ${app.get('port')}`);
            });
        } catch (ex) {
            console.log('Database connection error: ' + ex);
        }
    }
    start(app.get('port'));
}