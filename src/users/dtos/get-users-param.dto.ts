import { Transform, Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetUsersParamDto {
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === "true" || value === true) return true;
    if (value === "false" || value === false) return false;
    return undefined; // keep optional
  })
  isMarried: boolean;
}
