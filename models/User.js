const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    }, { timestamps: true }
);

mongoose.models = {}

export default mongoose.model("User", UserSchema);