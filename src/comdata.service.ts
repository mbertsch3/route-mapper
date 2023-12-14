import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import puppeteer from 'puppeteer';

@Injectable()
export class ComdataScraperService {
  @Cron(CronExpression.EVERY_5_MINUTES)
  async scrapeFuelListings() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto(
        'https://www.ttnews.com/2023-comdata-and-t-chek-averages',
      );

      // const matches = page.queryObjects(`cells[1].innerHTML`);
      // console.log('Matches: ' + matches);
      const fuelData = await page.$$eval(`.cells[1].innerHTML`, (elements) => {
        return elements.slice(0, 10).map((element) => {
          return element.textContent;
        });
      });

      console.log('Fuel Data', fuelData);
    } catch (error) {
      console.error('Error while scraping fuel:', error);
    } finally {
      await browser.close();
    }
  }
}
