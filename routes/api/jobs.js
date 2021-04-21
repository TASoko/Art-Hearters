const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const checkObjectId = require("../../middleware/checkObjectId");
const Project = require("../../models/Project");
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
		const { job, team, location, description,  position, from, to } = req.body;

		const newJob = await Job.create({
			user: req.user.id,
			job,
			location,
			description,
            position,
            team,
			from,
			to,
		});

		res.status(200).json({
			status: "success",
			data: {
				job: newJob,
			},
		});
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
		const updatedJob = await Job.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		);

		if (!updatedJob) {
			return res
				.status(404)
				.json({ status: "error", message: "job not found" });
		}

		res.status(200).json({
			status: "success",
			data: {
				job: updatedJob,
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
router.get("/", async (req, res) => {
	try {
		const jobs = await Job.find()
			.sort({ date: -1 })
			.populate({
				path: "user",
				select: { _id: 1, name: 1, email: 1 },
			});

		res.status(200).json({
			status: "success",
			results: jobs.length,
			data: jobs,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    GET api/projects/:id
// @desc     Get project by ID
// @access   Private
router.get("/:id", auth, checkObjectId("id"), async (req, res) => {
	try {
		const job = await Job.findById(req.params.id).populate({
			path: "user",
			select: { _id: 1, name: 1, email: 1 },
		});

		if (!job) {
			return res
				.status(404)
				.json({ status: "error", message: "job not found" });
		}

		res.status(200).json({
			status: "success",
			data: {
				job,
			},
		});
	} catch (err) {
		console.error(err.message);

		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    DELETE api/jobs/:id
// @desc     Delete a jobs
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
	try {
		const job = await Job.findByIdAndDelete(req.params.id);

		if (!job) {
			return res
				.status(404)
				.json({ status: "error", message: "job not found" });
		}

		// Check user
		if (job.user.toString() !== req.user.id) {
			return res
				.status(401)
				.json({ status: "error", message: "User not authorized" });
		}

		await job.remove();

		res.status(204).json({ status: "success" });
	} catch (err) {
		console.error(err.message);

		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// // @route    PUT api/projects/like/:id
// // @desc     Like a job
// // @access   Private
// router.put('/like/:id', auth, checkObjectId('id'), async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);

//     // Check if the job has already been liked
//     if (job.likes.some((like) => like.user.toString() === req.user.id)) {
//       return res.status(400).json({ msg: 'job already liked' });
//     }

//     job.likes.unshift({ user: req.user.id });

//     await job.save();

//     return res.json(job.likes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route    PUT api/projects/unlike/:id
// // @desc     Unlike a job
// // @access   Private
// router.put('/unlike/:id', auth, checkObjectId('id'), async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);

//     // Check if the job has not yet been liked
//     if (!job.likes.some((like) => like.user.toString() === req.user.id)) {
//       return res.status(400).json({ msg: 'job has not yet been liked' });
//     }

//     // remove the like
//     job.likes = job.likes.filter(
//       ({ user }) => user.toString() !== req.user.id
//     );

//     await job.save();

//     return res.json(job.likes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route    POST api/jobss/comment/:id
// // @desc     Comment on a job
// // @access   Private
// router.post(
//   '/comment/:id',
//   auth,
//   checkObjectId('id'),
//   check('text', 'Text is required').notEmpty(),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const user = await User.findById(req.user.id).select('-password');
//       const job = await Job.findById(req.params.id);

//       const newComment = {
//         text: req.body.text,
//         name: user.name,
//                 user: req.user.id
//       };

//       job.comments.unshift(newComment);

//       await job.save();

//       res.json(job.comments);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// @route    DELETE api/jobs/comment/:id/:comment_id
// @desc     Delete comment
// // @access   Private
// router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);

//     // Pull out comment
//     const comment = job.comments.find(
//       (comment) => comment.id === req.params.comment_id
//     );
//     // Make sure comment exists
//     if (!comment) {
//       return res.status(404).json({ msg: 'Comment does not exist' });
//     }
//     // Check user
//     if (comment.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'User not authorized' });
//     }

//     job.comments = job.comments.filter(
//       ({ id }) => id !== req.params.comment_id
//     );

//     await job.save();

//     return res.json(job.comments);
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).send('Server Error');
//   }
// });

module.exports = router;
