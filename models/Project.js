const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	project: {
		type: String,
	},

	location: {
		type: String,
	},

	description: {
		type: String,
		required: true,
	},

	from: {
		type: Date,
	},
	to: {
		type: Date,
	},

	date: {
		type: Date,
		default: Date.now,
	},
	aws_image_url: {
		type: String
	}
});

module.exports = mongoose.model("project", ProjectSchema);
