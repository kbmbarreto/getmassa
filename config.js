module.exports = {
    db: {
        database: 'getmassa',
        username: 'developer',
        password: 'Developer2020@',
        params: {
            dialect: 'mssql',
            host: 'localhost',
            port: 1433,
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