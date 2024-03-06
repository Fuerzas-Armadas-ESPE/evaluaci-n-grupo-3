import { Course } from './course.model';
import { CourseService } from './courses.service';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): Promise<Course[]>;
    getCourse(id: string): Promise<Course | null>;
    createCourse(courseData: Omit<Course, '_id' | 'createdAt'>): Promise<Course>;
    updateCourse(id: string, courseData: Partial<Course>): Promise<Course | null>;
    deleteCourse(id: string): Promise<void>;
}
