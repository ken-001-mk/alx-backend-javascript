class AppController {
  static getHomepage(req, res) {
    res.status(200).send({ message: 'Hello Holberton School' });
  }
}