const db = require("../data/dbConfig");

async function get() {
	return db("users").select("id", "username");
}

function getById(id) {
	return db("users").select("id", "username").where({ id }).first();
}

async function add(user) {
	const [id] = await db("users").insert(user);
	return getById(id);
}

function getBy(filter) {
	return db("users").select("id", "username", "password", "email").where(filter);
}

module.exports = {
	get,
	add,
	getBy,
	getById,
};
