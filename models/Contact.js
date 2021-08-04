module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        mensagem: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        replied: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        tableName: 'contact',
        timestamps: true
    })

    return Contact
}