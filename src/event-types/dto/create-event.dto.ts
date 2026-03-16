import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(5)
  duration: number;

  @IsString()
  locationType: string;

  @IsOptional()
  questions?:
    | string
    | Array<{
        id?: number | string;
        question: string;
        type?: string;
        required?: boolean;
        options?: string[];
      }>;
}
