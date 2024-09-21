import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;
  let model: any;

  const mockArticleModel = {
    // Define the mock methods that you expect to use in your tests
    find: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getModelToken('Article'),  // Inject the mock model
          useValue: mockArticleModel,
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    model = module.get(getModelToken('Article'));  // Use the mocked model in the test
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Additional tests for service methods
});
