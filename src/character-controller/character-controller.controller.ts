import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterControllerService } from './character-controller.service';
import { CreateCharacterControllerDto } from './dto/create-character-controller.dto';
import { UpdateCharacterControllerDto } from './dto/update-character-controller.dto';

@Controller('character-controller')
export class CharacterControllerController {
  constructor(private readonly characterControllerService: CharacterControllerService) {}

  @Post()
  create(@Body() createCharacterControllerDto: CreateCharacterControllerDto) {
    return this.characterControllerService.create(createCharacterControllerDto);
  }

  @Get()
  findAll() {
    return this.characterControllerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterControllerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterControllerDto: UpdateCharacterControllerDto) {
    return this.characterControllerService.update(+id, updateCharacterControllerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterControllerService.remove(+id);
  }
}
