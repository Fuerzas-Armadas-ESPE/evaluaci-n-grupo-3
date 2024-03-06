import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://grupo3:grupo3@localhost:27037/', { dbName: 'mydatabase' }),
CoursesModule,
  TopicsModule,
  ],
})
export class AppModule { }