const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
	// find all tags
	Tag.findAll({
		// be sure to include its associated Product data
		include: { all: true },
	})
		.then((dbTagData) => res.json(dbTagData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	// find a single tag by its `id`
	Tag.findOne({
		where: {
			id: req.params.id,
		},
		// be sure to include its associated Product data
		include: { all: true },
	})
		.then((dbTagData) => res.json(dbTagData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/", (req, res) => {
	// create a new tag
	// expects {tag_name: "test_name"}
	Tag.create({
		tag_name: req.body.tag_name,
	})
		.then((dbCreateTagData) => res.status(200).json(dbCreateTagData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
	// update a tag's name by its `id` value
	// expects {tag_name: "new_name"}
	Tag.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbUpdateTagData) => {
			if (!dbUpdateTagData) {
				res.status(404).json({ message: "No tag found with this id" });
				return;
			}
			res.json(dbUpdateTagData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete on tag by its `id` value
	Tag.destroy({
		where: {
			id: req.params.id,
		},
	}).then((dbDeleteTagData) => {
		if (!dbDeleteTagData) {
			res.status(404).json({ message: "No tag found with this id" });
			return;
		}
		res.json(dbDeleteTagData);
	});
});

module.exports = router;
