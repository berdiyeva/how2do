const express = require("express");
const Rate = require("./rate-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const rates = await Rate.getRates();
		res.json(rates);
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const rate = await Rate.getRateById(req.params.id);
		if (!rate) {
			return res.status(404).json({
				message: "The feedback is not found.",
			});
		}
		res.json(rate);
	} catch (err) {
		next(err);
	}
});


router.post("/", async (req, res, next) => {
	try {
		const newPost = await Rate.addRate(req.body);
		res.json(newPost);
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		await Rate.deleteRate(req.params.id);

		res.json({
			message: "Your feedback was removed.",
		});
	} catch (err) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		await Rate.updateRate(req.params.id, req.body);
		res.json({
			message: "The feedback was updated.",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
