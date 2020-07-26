const express = require("express");
const Posts = require("./posts-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const posts = await Posts.getPosts();
		res.json(posts);
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const post = await Posts.getPostById(req.params.id);
		if (!post) {
			return res.status(404).json({
				message: "The post not found.",
			});
		}
		res.json(post);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/rates", async (req, res, next) => {
	try {
		const [rate] = await Posts.getRateByPost(req.params.id);
		if (!rate) {
			return res.status(404).json({
				message: "The rate not found.",
			});
		}
		res.json(rate);
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newPost = await Posts.addPost(req.body);
		res.json(newPost);
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		await Posts.deletePost(req.params.id);

		res.json({
			message: "The post was removed.",
		});
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		await Posts.updatePost(req.params.id, req.body);
		res.json({
			message: "The post was updated.",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
