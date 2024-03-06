import { Model } from 'mongoose';
import { Course } from './course.model';
export declare class CourseService {
    private readonly courseModel;
    constructor(courseModel: Model<Course>);
    getAllCourses(): Promise<Course[]>;
    getCourse(id: string): Promise<Course | null>;
    createCourse(courseData: Omit<Course, '_id' | 'createdAt'>): Promise<Course>;
    updateCourse(id: string, courseData: Partial<Course>): Promise<Course | null>;
    deleteCourse(id: string): Promise<void>;
}
