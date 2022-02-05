const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
	// find all categories
	Category.findAll({
		include: { all: true },
	})
		// be sure to include its associated Products
		.then((dbCatData) => res.json(dbCatData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	// find one category by its `id` value
	Category.findOne({
		where: {
			id: req.params.id,
		},
		// be sure to include its associated Products
		include: { all: true },
	})
		.then((dbSingleCatData) => res.json(dbSingleCatData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/", (req, res) => {
	// create a new category
	// expects {category_name: "test_name"}
	Category.create({
		category_name: req.body.category_name,
	})
		.then((dbCreateCatData) => res.status(200).json(dbCreateCatData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
	// update a category by its `id` value
	// expects {category_name: "new_name"}
	Category.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbUpdateCatData) => {
			if (!dbUpdateCatData) {
				res.status(404).json({ message: "No category found with this id" });
				return;
			}
			res.json(dbUpdateCatData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete a category by its `id` value
	Category.destroy({
		where: {
			id: req.params.id,
		},
	}).then((dbDeleteCatData) => {
		if (!dbDeleteCatData) {
			res.status(404).json({ message: "No category found with this id" });
			return;
		}
		res.json(dbDeleteCatData);
	});
});

module.exports = router;
