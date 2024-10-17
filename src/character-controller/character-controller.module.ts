import { Module } from '@nestjs/common';
import { CharacterControllerService } from './character-controller.service';
import { CharacterControllerController } from './character-controller.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CharacterControllerController],
  providers: [CharacterControllerService],
  imports: [PrismaModule],
})
export class CharacterControllerModule {}
