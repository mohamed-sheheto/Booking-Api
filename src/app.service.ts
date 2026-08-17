import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { env } from './common/config/env.interface';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService<env>) {}
  getHello(): string {
    console.log('Running on PORT: ', this.configService.get('PORT'));

    return 'Hello World!';
  }
}
