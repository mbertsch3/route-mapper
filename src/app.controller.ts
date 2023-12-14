import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { GeocodeArrayDto } from './shared/dtos/receive-geocode.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('/')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiTags('Hello')
  @Get('/hello')
  getHelloAgain(): string {
    return this.appService.getHelloAgain();
  }

  @ApiTags('Mapper')
  @ApiResponse({
    status: 400,
    description: 'Indicates the request does not pass authorization',
  })
  @ApiResponse({
    status: 201,
    description: 'Indicates that the free astray was created',
    type: String,
  })
  @Post('/mapper')
  @ApiBody({
    type: GeocodeArrayDto,
    description: 'Json structure for geocodelist object',
  })
  getAverageGeocode(@Body() body: GeocodeArrayDto): object {
    return this.appService.getAverageGeocode(body.geos);
  }
}
