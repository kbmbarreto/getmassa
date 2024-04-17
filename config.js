module.exports = {
    db: {
        database: 'getmassa',
        username: 'developer',
        password: 'Dev2020@',
        params: {
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            define: {
                underscored: true
            }
        },
        timezone: '-03:00',
        define: {
            freezeTableName: true,
            timestamps: false,
            createdAt: true,
            updatedAt: true
        },
    }
};