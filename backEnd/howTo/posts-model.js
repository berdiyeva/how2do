const db = require("../data/dbConfig");

module.exports = {
	getPosts,
	getPostById,
	addPost,
	getRateByPost,
	deletePost,
	updatePost,
};

function getPosts() {
	return db("posts");
}

function getPostById(id) {
	return db("posts").where("id", id).first();
}

function addPost(post) {
	return db("posts")
		.insert(post)
		.then((id) => {
			return getPostById(id[0]);
		});
}

function getRateByPost(id) {
	return db("posts as p")
		.where("p.id", id)
		.join("rate as r", "r.posts_id", "p.id")
		.select("r.*");
}

function deletePost(id) {
	return db("posts").where({ id }).del();
}

function updatePost(id, change) {
	return db("posts").where({ id }).update(change);
}
