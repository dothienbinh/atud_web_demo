

class CorsController {


    index (req, res, next) {
        res.send('hello');
    }

}

module.exports = new CorsController;