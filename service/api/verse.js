var QuranApi = require('../shared/quranapi'),
    log = console.log;

exports.register = function (api) {
    api.get('/:surah/:verse', getVerses);
    api.get('/:surah', getVerses);
}

exports.get = getVerses;

function getVerses(req, res) {
    new QuranApi().getVerses(req.params.surah, req.params.verse, function(err, verses) {
        if (err) {
            log('Error calling api: ', err);
            res.send(statusCodes.BAD_REQUEST, err);
        } else {
            res.send(statusCodes.OK, verses);
        }
    });    
}