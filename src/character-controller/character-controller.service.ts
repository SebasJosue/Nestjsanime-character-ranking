import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCharacterControllerDto } from './dto/create-character-controller.dto';
import { UpdateCharacterControllerDto } from './dto/update-character-controller.dto';

@Injectable()
export class CharacterControllerService {
  constructor(private prisma: PrismaService) {}

  async create(createCharacterControllerDto: CreateCharacterControllerDto) {
    return this.prisma.character.create({
      data: createCharacterControllerDto,
    });
  }

  async findAll() {
    return this.prisma.character.findMany();
  }

  async findOne(id: number) {
    return this.prisma.character.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCharacterControllerDto: UpdateCharacterControllerDto) {
    return this.prisma.character.update({
      where: { id },
      data: updateCharacterControllerDto,
    });
  }

  async remove(id: number) {
    return this.prisma.character.delete({
      where: { id },
    });
  }
}
