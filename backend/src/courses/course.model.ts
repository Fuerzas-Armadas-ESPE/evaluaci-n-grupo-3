import { Schema, Document, Types } from 'mongoose';

export interface Course extends Document {
  title: string;
  createdAt: Date;
  topics: Types.ObjectId[]; // Use Types.ObjectId instead of Schema.Types.ObjectId
}

export const CourseSchema = new Schema<Course>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
  },
  { timestamps: true },
);