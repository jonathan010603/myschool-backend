/* eslint-disable class-methods-use-this */
class Home {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new Home();
