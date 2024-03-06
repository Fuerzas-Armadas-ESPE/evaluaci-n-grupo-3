import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Topic } from './topic.model';
import { TopicService } from './topics.service';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicService: TopicService) {}

  @Get()
  async getAllTopics(): Promise<Topic[]> {
    return await this.topicService.getAllTopics();
  }

  @Get(':id')
  async getTopic(@Param('id') id: string): Promise<Topic | null> {
    try {
      return await this.topicService.getTopic(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  @Post()
  async createTopic(@Body() topicData: Omit<Topic, '_id' | 'createdAt'>): Promise<Topic> {
    try {
      return await this.topicService.createTopic(topicData);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Put(':id')
  async updateTopic(@Param('id') id: string, @Body() topicData: Partial<Topic>): Promise<Topic | null> {
    try {
      return await this.topicService.updateTopic(id, topicData);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  async deleteTopic(@Param('id') id: string): Promise<void> {
    try {
      await this.topicService.deleteTopic(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }
}