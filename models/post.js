module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2,15]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }
    });
  
    /*
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  */
    return Post;
  };
  