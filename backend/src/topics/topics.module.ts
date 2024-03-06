import { Module } from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { TopicService } from './topics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicSchema } from './topic.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Topic', schema: TopicSchema }])],
  controllers: [TopicsController],
  providers: [TopicService],
})
export class TopicsModule {}