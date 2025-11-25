module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },

    imageType: DataTypes.STRING,
    imageName: DataTypes.STRING,
    imageName: DataTypes.BLOB('long'),
    },
    {
      tableName: "komik",
    });
    
    return Komik;
  }