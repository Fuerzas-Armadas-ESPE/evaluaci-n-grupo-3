import { Schema, Document } from 'mongoose';
export interface Topic extends Document {
    title: string;
    createdAt: Date;
    reviewed: boolean;
}
export declare const TopicSchema: Schema<Topic, import("mongoose").Model<Topic, any, any, any, Document<unknown, any, Topic> & Topic & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Topic, Document<unknown, {}, import("mongoose").FlatRecord<Topic>> & import("mongoose").FlatRecord<Topic> & {
    _id: import("mongoose").Types.ObjectId;
}>;
