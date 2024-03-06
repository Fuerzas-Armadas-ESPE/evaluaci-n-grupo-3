import { Test, TestingModule } from '@nestjs/testing';
import { TopicService } from './topics.service';
import { getModelToken } from '@nestjs/mongoose';

describe('TopicsService', () => {
  let topicsService: TopicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TopicService,
        {
          provide: getModelToken('Topic'),
          useValue: {}, // Provide a mock value for the Topic model
        },
      ],
    }).compile();

    topicsService = module.get<TopicService>(TopicService);
  });

  it('should be defined', () => {
    expect(topicsService).toBeDefined();
  });

  // Add more tests as needed for service methods
});