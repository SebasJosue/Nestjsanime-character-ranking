import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterControllerDto } from './create-character-controller.dto';

export class UpdateCharacterControllerDto extends PartialType(CreateCharacterControllerDto) {}
