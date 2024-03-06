"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TopicSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    reviewed: { type: Boolean, default: false },
}, { timestamps: true });
//# sourceMappingURL=topic.model.js.map