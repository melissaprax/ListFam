"use strict";
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define(
    "List",
    {
      title: DataTypes.STRING,
      allowNull: false
    },
    {}
  );
  List.associate = function(models) {
    List.hasMany(models.Item, {
      foreignKey: "listId",
      as: "items"
    });
  };
  return List;
};
