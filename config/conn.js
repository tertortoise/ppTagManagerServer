const mongoose = require('mongoose');

mongoose.set('debug', true);

async function getConn() {
	await mongoose.connect('mongodb://heroku_1b2vztrh:g92t4a7hdpt84p6255vuvhhq5c@ds261296.mlab.com:61296/heroku_1b2vztrh', { useNewUrlParser: true });
}

getConn().catch(e => console.error(`No connection to DB: ${e.message}`));

module.exports = mongoose;
