import { Test, TestingModule } from '@nestjs/testing';
import { CharacterControllerService } from './character-controller.service';

describe('CharacterControllerService', () => {
  let service: CharacterControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterControllerService],
    }).compile();

    service = module.get<CharacterControllerService>(CharacterControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
