var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Home'});
});

router.get('/timeline', function (req, res) {
    var date = new Date();
    var currentH = date.getHours();
    var currentM = date.getMinutes();
    res.render('timeline',
        {
            title: 'Timeline - UTCNow',
            nowH: currentH,
            nowM: currentM
        }
    )
})

module.exports = router;
