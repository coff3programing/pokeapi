import { IsInt, IsPositive, MinLength } from 'class-validator';
const message = 'No tenemos e';

export class POKEDTO {
  @IsInt()
  @IsPositive()
  @MinLength(1, { message })
  id: number;
}
