import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { GeocodeDto } from './shared/dtos/receive-geocode.dto';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}

  getHello(): string {
    return 'Hello World!';
  }

  getHelloAgain(): string {
    return 'Hello World, love wong fu!';
  }

  getAverageGeocode(data: GeocodeDto[]): object {
    console.log('Body in function: ' + JSON.stringify(data[0]));
    let lattotal = 0;
    let lontotal = 0;
    for (let i = 0; i < data.length; i++) {
      lattotal += data[i].lat;
      lontotal += data[i].lon;
    }
    const avglat = lattotal / data.length;
    const avglon = lontotal / data.length;

    console.log(avglat);
    console.log(avglon);
    return {
      lat: avglat,
      lon: avglon,
      order: [],
    };
  }
}
