const List = require("./models").List;

module.exports = {
  getAllLists(callback) {
    console.log("GET ALL LISTS ");
    return List.findAll()
      .then(lists => {
        callback(null, lists);
      })
      .catch(err => {
        console.log("QUERY ERROR ", err);
        callback(err);
      });
  },
  addList(newList, callback) {
    return List.create({
      title: newList.title
    })
      .then(list => {
        callback(null, list);
      })
      .catch(err => {
        callback(err);
      });
  }
};
