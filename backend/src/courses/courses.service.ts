import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './course.model';

@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) {}

  async getAllCourses(): Promise<Course[]> {
    return await this.courseModel.find().exec();
  }

  async getCourse(id: string): Promise<Course | null> {
    try {
      const course = await this.courseModel.findById(id).exec();
      if (!course) {
        throw new NotFoundException('Course not found');
      }
      return course;
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async createCourse(courseData: Omit<Course, '_id' | 'createdAt'>): Promise<Course> {
    try {
      const createdCourse = new this.courseModel(courseData);
      return await createdCourse.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateCourse(id: string, courseData: Partial<Course>): Promise<Course | null> {
    try {
      const existingCourse = await this.courseModel.findById(id).exec();
      if (!existingCourse) {
        throw new NotFoundException('Course not found');
      }
      existingCourse.set(courseData);
      return await existingCourse.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async deleteCourse(id: string): Promise<void> {
    try {
      await this.courseModel.findByIdAndDelete(id).exec();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }
}