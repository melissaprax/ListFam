const listQueries = require("../db/queries.lists.js");

module.exports = {
  index(req, res, next) {
    listQueries.getAllLists((err, lists) => {
      if (err) {
        console.log("ERROR ", err);
        res.redirect(500, "static/index");
      } else {
        res.render("lists/index", { lists });
      }
    });
  }
};
