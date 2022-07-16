
class NewsController {



    // [GET] /news
    index(req, res) {
        res.send(JSON.stringify(req.body.data));
    }

    show(req, res) {
        res.send('alo');
    }
}


module.exports = new NewsController;