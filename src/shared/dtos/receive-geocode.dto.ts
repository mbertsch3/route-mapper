import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsString } from 'class-validator';

export class GeocodeDto {
  @ApiProperty({ example: 'Anna', required: true })
  @IsString()
  id: string;

  @ApiProperty({
    example: 40.123456,
    required: true,
  })
  @IsLatitude()
  lat: number;

  @ApiProperty({ example: -83.123456, required: true })
  @IsLongitude()
  lon: number;
}

export class GeocodeArrayDto {
  @ApiProperty({
    example: [{ id: 'MKB', lat: 12345, lon: 12345 }],
    type: [GeocodeDto],
  })
  geos: GeocodeDto[];
}
