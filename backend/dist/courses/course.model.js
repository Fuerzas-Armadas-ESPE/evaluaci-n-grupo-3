"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CourseSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    topics: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Topic' }],
}, { timestamps: true });
//# sourceMappingURL=course.model.js.map