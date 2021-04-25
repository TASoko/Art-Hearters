const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");
const Event = require("../../models/Event");

// @route    POST api/events
// @desc     Create a event
// @access   Private
router.post("/", auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { event, title, location, description, from, to } = req.body;

		const newEvent = await Event.create({
			user: req.user.id,
			event,
			title,
			location,
			description,
			from,
			to,
		});

		res.status(200).json({
			status: "success",
			data: {
				event: newEvent,
			},
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    PATCH api/events
// @desc     Update a event
// @access   Private
router.patch("/:id", auth, checkObjectId("id"), async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const updatedEvent = await Event.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		);

		if (!updatedEvent) {
			return res
				.status(404)
				.json({ status: "error", message: "event not found" });
		}

		res.status(200).json({
			status: "success",
			data: {
				event: updatedEvent,
			},
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    GET api/events
// @desc     Get all events
// @access   Public
router.get("/", async (req, res) => {
	try {
		const events = await Event.find()
			.sort({ date: -1 })
			.populate({
				path: "User",
				select: { _id: 1, name: 1, email: 1 },
			});

		res.status(200).json({
			status: "success",
			results: events.length,
			data: events,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    GET api/events/:id
// @desc     Get event by ID
// @access   Private
router.get("/:id", auth, checkObjectId("id"), async (req, res) => {
	try {
		const event = await Event.findById(req.params.id).populate({
			path: "User",
			select: { _id: 1, name: 1, email: 1 },
		});

		if (!event) {
			return res
				.status(404)
				.json({ status: "error", message: "event not found" });
		}

		res.status(200).json({
			status: "success",
			data: {
				event,
			},
		});
	} catch (err) {
		console.error(err.message);

		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    DELETE api/events/:id
// @desc     Delete a events
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
	try {
		const event = await Event.findById(req.params.id);

		if (!event) {
			return res
				.status(404)
				.json({ status: "error", message: "event not found" });
		}

		// Check user
		if (event.user.toString() !== req.user.id) {
			return res
				.status(401)
				.json({ status: "error", message: "User not authorized" });
		}

		await event.remove();

		res.status(204).json({ status: "success" });
	} catch (err) {
		console.error(err.message);

		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

module.exports = router;
