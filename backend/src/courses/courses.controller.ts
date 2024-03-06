import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Course } from './course.model';
import { CourseService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CourseService) { }

  @Get()
  async getAllCourses(): Promise<Course[]> {
    return await this.courseService.getAllCourses();
  }

  @Get(':id')
  async getCourse(@Param('id') id: string): Promise<Course | null> {
    try {
      return await this.courseService.getCourse(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  @Post()
  async createCourse(@Body() courseData: Omit<Course, '_id' | 'createdAt'>): Promise<Course> {
    try {
      return await this.courseService.createCourse(courseData);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Put(':id')
  async updateCourse(@Param('id') id: string, @Body() courseData: Partial<Course>): Promise<Course | null> {
    try {
      return await this.courseService.updateCourse(id, courseData);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: string): Promise<void> {
    try {
      await this.courseService.deleteCourse(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }


}

