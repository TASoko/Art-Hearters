const express = require("express");
const config = require("config");

const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");
const User = require("../../models/User");
const checkObjectId = require("../../middleware/checkObjectId");

// for testing routes... 
const axios = require("axios")  // <-- make a get all request below when return

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
	"/",
	check("name", "Name is required").notEmpty(),
	check("email", "Please include a valid email").isEmail(),
	check(
		"password",
		"Please enter a password with 6 or more characters"
	).isLength({ min: 6 }),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "User already exists" }] });
			}

			user = new User({
				name,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();			

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: "5 days" },
				(err, token) => {
					if (err) throw err;
					res.status(200).json({ status: "success", token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
		console.log("registered the user on the post route '/' ");
		
	}
);

// @route    GET api/users/:id
// @desc     Get user by ID
// @access   Public
router.get("/:id", checkObjectId("id"), async (req, res) => {
	try {
		const user = await User.findById(req.params.id).populate({
			path: "projects",
			select: {
				_id: 1,
				project: 1,
				description: 1,
				location: 1,
				to: 1,
				from: 1,
			},
		});

		if (!user) {
			return res
				.status(404)
				.json({ status: "error", message: "user not found" });
		}

		res.status(200).json({
			status: "success",
			data: {
				user,
			},
		});
	} catch (err) {
		console.error(err.message);

		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
});

// @route    GET api/users
// @desc     Get all users
// @access   Public
router.get("/all-users", async (req, res) => {
	console.log("pinged!")
	try {
		const users = await User.find()
			.sort({ date: -1 })
			.populate({
				path: "user",
				select: { _id: 1, name: 1, email: 1 },
			});

		res.status(200).json({
			status: "success",
			results: users.length,
			data: users,
		})
		.then(console.log(data));
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ status: "error", message: "Something went wrong!" });
	}
	console.log(users)
});

module.exports = router;
