import { Model } from 'mongoose';
import { Topic } from './topic.model';
export declare class TopicService {
    private readonly topicModel;
    constructor(topicModel: Model<Topic>);
    getAllTopics(): Promise<Topic[]>;
    getTopic(id: string): Promise<Topic | null>;
    createTopic(topicData: Omit<Topic, '_id' | 'createdAt'>): Promise<Topic>;
    updateTopic(id: string, topicData: Partial<Topic>): Promise<Topic | null>;
    deleteTopic(id: string): Promise<void>;
}
