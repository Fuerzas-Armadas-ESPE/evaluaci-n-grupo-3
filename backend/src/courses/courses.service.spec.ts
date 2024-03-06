import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from './courses.service';
import { getModelToken } from '@nestjs/mongoose';

describe('CoursesService', () => {
  let coursesService: CourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        {
          provide: getModelToken('Course'),
          useValue: {}, 
        },
      ],
    }).compile();

    coursesService = module.get<CourseService>(CoursesService);
  });

  it('should be defined', () => {
    expect(coursesService).toBeDefined();
  });

});