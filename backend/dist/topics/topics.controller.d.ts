import { Topic } from './topic.model';
import { TopicService } from './topics.service';
export declare class TopicsController {
    private readonly topicService;
    constructor(topicService: TopicService);
    getAllTopics(): Promise<Topic[]>;
    getTopic(id: string): Promise<Topic | null>;
    createTopic(topicData: Omit<Topic, '_id' | 'createdAt'>): Promise<Topic>;
    updateTopic(id: string, topicData: Partial<Topic>): Promise<Topic | null>;
    deleteTopic(id: string): Promise<void>;
}
