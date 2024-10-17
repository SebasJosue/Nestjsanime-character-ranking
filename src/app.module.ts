import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterControllerModule } from './character-controller/character-controller.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CharacterControllerModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
