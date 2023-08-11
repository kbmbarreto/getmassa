module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: 'GetMassa 1.0.0', number: '1.0.0', date: '11/08/2023', description: 'Versão inicial do sistema.'},
            ]);
        },
    }
}