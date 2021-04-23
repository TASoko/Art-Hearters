const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Virtual Populate
UserSchema.virtual("projects", {
	ref: "project",
	foreignField: "user",
	localField: "_id",
});
UserSchema.virtual("jobs", {
	ref: "job",
	foreignField: "user",
	localField: "_id",
});
UserSchema.virtual("events", {
	ref: "event",
	foreignField: "user",
	localField: "_id",
});

const User = mongoose.model("User", UserSchema)

module.exports = User;

// module.exports = User = mongoose.model("User", UserSchema);
