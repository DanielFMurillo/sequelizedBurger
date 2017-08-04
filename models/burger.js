module.exports = function(sequelize, DataTypes){

    var Burgers = sequelize.define("Burgers", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
            
        },
        timestamp: {
            type: DataTypes.DATE         
        }
    });
    return Burgers;
    };

