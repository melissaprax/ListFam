const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/lists";
const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;

describe("routes : lists", () => {
  beforeEach(done => {
    this.list;
    sequelize.sync({ force: true }).then(res => {
      List.create({
        title: "My first list"
      }).then(list => {
        this.list = list;
        done();
      });
    });
  });
  describe("GET /lists", () => {
    it("should return a status code 200 and all lists", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("My first list");
        done();
      });
    });
  });
  describe("GET /lists/new", () => {
    it("should render a new list form", done => {
      request.get(`${base}new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New List");
        done();
      });
    });
  });
  describe("POST /lists/create", () => {
    const options = {
      url: `${base}create`,
      form: {
        title: "my first grocery list"
      }
    };
    it("should create a new list and redirect", done => {
      request.post(options, (err, res, body) => {
        List.findOne({ where: { title: "my first grocery list" } })
          .then(list => {
            expect(res.statusCode).toBe(303);
            expect(list.title).toBe("my first grocery list");
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });
});
