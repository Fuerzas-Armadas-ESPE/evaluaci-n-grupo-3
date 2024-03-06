import { Schema, Document } from 'mongoose';

export interface Topic extends Document {
  title: string;
  createdAt: Date;
  reviewed: boolean;
}

export const TopicSchema = new Schema<Topic>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    reviewed: { type: Boolean, default: false },
  },
  { timestamps: true },
);