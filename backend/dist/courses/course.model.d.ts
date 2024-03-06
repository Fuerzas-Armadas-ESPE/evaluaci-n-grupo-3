import { Schema, Document, Types } from 'mongoose';
export interface Course extends Document {
    title: string;
    createdAt: Date;
    topics: Types.ObjectId[];
}
export declare const CourseSchema: Schema<Course, import("mongoose").Model<Course, any, any, any, Document<unknown, any, Course> & Course & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Course, Document<unknown, {}, import("mongoose").FlatRecord<Course>> & import("mongoose").FlatRecord<Course> & {
    _id: Types.ObjectId;
}>;
