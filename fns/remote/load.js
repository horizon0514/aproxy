module.exports = (function(fs){
    return function(req, res){
        fs.read().then(function(remotes){
            res.json({
                success: true,
                remotes: remotes
            });
        }, function(){
            res.json({ success: false });
        });
    };
}(require('./fs.js')));
