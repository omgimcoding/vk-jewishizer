function removeTrailingSlash(req, res, next) {
    if (req.path.substr(-1) === '/' && req.path.length > 1) {
        res.redirect(301, req.path.slice(0, -1));
    } else {
        next();
    }
}

module.exports = removeTrailingSlash;
