import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './topic.model';

@Injectable()
export class TopicService {
  constructor(@InjectModel('Topic') private readonly topicModel: Model<Topic>) {}

  async getAllTopics(): Promise<Topic[]> {
    return await this.topicModel.find().exec();
  }

  async getTopic(id: string): Promise<Topic | null> {
    try {
      const topic = await this.topicModel.findById(id).exec();
      if (!topic) {
        throw new NotFoundException('Topic not found');
      }
      return topic;
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async createTopic(topicData: Omit<Topic, '_id' | 'createdAt'>): Promise<Topic> {
    try {
      const createdTopic = new this.topicModel(topicData);
      return await createdTopic.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateTopic(id: string, topicData: Partial<Topic>): Promise<Topic | null> {
    try {
      const existingTopic = await this.topicModel.findById(id).exec();
      if (!existingTopic) {
        throw new NotFoundException('Topic not found');
      }
      existingTopic.set(topicData);
      return await existingTopic.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async deleteTopic(id: string): Promise<void> {
    try {
      await this.topicModel.findByIdAndDelete(id).exec();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }
}