if (process.env.NODE_ENV === 'production') {
    // we are in prod and return the prod set of keys
    module.exports = require('./prod');


} else {
    //we are in dev and return the dev keys
    module.exports = require('./dev');
}