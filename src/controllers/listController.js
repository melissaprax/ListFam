const listQueries = require("../db/queries.lists.js");

module.exports = {
  index(req, res, next) {
    listQueries.getAllLists((err, lists) => {
      if (err) {
        res.redirect(500, "static/index");
      } else {
        res.render("lists/index", { lists });
      }
    });
  },
  new(req, res, next) {
    res.render("lists/new");
  },
  create(req, res, next) {
    let newList = {
      title: req.body.title
    };
    listQueries.addList(newList, (err, list) => {
      if (err) {
        res.redirect(500, "/lists/new");
      } else {
        res.redirect(303, `/lists/${list.id}`);
      }
    });
  }
};
