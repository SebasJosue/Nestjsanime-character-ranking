import { Test, TestingModule } from '@nestjs/testing';
import { CharacterControllerController } from './character-controller.controller';
import { CharacterControllerService } from './character-controller.service';

describe('CharacterControllerController', () => {
  let controller: CharacterControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterControllerController],
      providers: [CharacterControllerService],
    }).compile();

    controller = module.get<CharacterControllerController>(CharacterControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
