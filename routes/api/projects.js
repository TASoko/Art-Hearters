const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const checkObjectId = require("../../middleware/checkObjectId");
const Project = require("../../models/Project");
const Event = require("../../models/Event");
const Job = require("../../models/Job");

// @route    POST api/projects
// @desc     Create a project
// @access   Private
router.post("/", auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { project, location, description, from, to } = req.body;

		const newProject = await Project.create({
			user: req.user.id,
			project,
			location,
			description,
			from,
			to,
		});

		res.status(200).json({
			status: "success",
			data: {
				project: newProject,
			},
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
})


router.get("/all", async (req, res) => {
	try {
		const projects = await Project.find({}).sort({ date: -1 });
		const events = await Event.find({}).sort({ date: -1 });
		const jobs = await Job.find({}).sort({ date: -1 });
		const allData = {
			projects,
			events,
			jobs,
		};
		res.json(allData);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    PATCH api/projects
// @desc     Update a project
// @access   Private
router.patch("/:id", auth, checkObjectId("id"), async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const updatedProject = await Project.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		);

		if (!updatedProject) {
			return res
				.status(404)
				.json({ status: "error", message: "project not found" });
		}

		res.status(200).json({
			status: "success",
			data: {
				project: updatedProject,
			},
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    GET api/projects
// @desc     Get all projects
// @access   Public

// router.get("/", async (req, res) => {
// 	try {
// 		const projects = await Project.find()
// 			.sort({ date: -1 })
// 			.populate({
// 				path: "user",
// 				select: { _id: 1, name: 1, email: 1 },
// 			});

// 		res.status(200).json({
// 			status: "success",
// 			results: projects.length,
// 			data: projects,
// 		});
// 	} catch (err) {
// 		console.error(err.message);
// 		res.status(500).json({ status: "error", message: "Something went wrong!" });
// 	}
// });

// @route    GET api/projects/:id
// @desc     Get project by ID
// @access   Private
router.get("/:id", auth, checkObjectId("id"), async (req, res) => {
	try {
		const project = await Project.findById(req.params.id).populate({
			path: "user",
			select: { _id: 1, name: 1, email: 1 },
		});

		if (!project) {
			return res
				.status(404)
				.json({ status: "error", message: "project not found" });
		}

		res.status(200).json({
			status: "success",
			data: {
				project,
			},
		});
	} catch (err) {
		console.error(err.message);

		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    DELETE api/projects/:id
// @desc     Delete a projects
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);

		if (!project) {
			return res
				.status(404)
				.json({ status: "error", message: "project not found" });
		}

		// Check user
		if (project.user.toString() !== req.user.id) {
			return res
				.status(401)
				.json({ status: "error", message: "User not authorized" });
		}

		await project.remove();

		res.status(204).json({ status: "success" });
	} catch (err) {
		console.error(err.message);

		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    POST api/projects
// @desc     Create a project
// @access   Private
router.post("/", auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { project, location, description, from, to } = req.body;

		const newProject = await Project.create({
			user: req.user.id,
			project,
			location,
			description,
			from,
			to,
		});

		res.status(200).json({
			status: "success",
			data: {
				project: newProject,
			},
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

module.exports = router;
