module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        mobile: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        categoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'users',
        timestamps: true
    })

    return User
}