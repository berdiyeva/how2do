const db = require("../data/dbConfig");

module.exports = {
	getRates,
	getRateById,
	addRate,
	deleteRate,
	updateRate,
};

function getRates() {
	return db("rate");
}

function getRateById(id) {
	return db("rate").where("id", id).first();
}

function addRate(item) {
	return db("rate")
		.insert(item)
		.then((id) => {
			return getRateById(id[0]);
		});
}

function deleteRate(id) {
	return db("rate").where({ id }).del();
}

function updateRate(id, change) {
	return db("rate").where({ id }).update(change);
}
