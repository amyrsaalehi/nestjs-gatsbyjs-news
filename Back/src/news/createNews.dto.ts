import { IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly link: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly content: string;
  @IsString()
  readonly source: string;
  @IsString()
  readonly author: string;
  @IsString()
  readonly image: string;
  @IsString()
  readonly date: string;
}