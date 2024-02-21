import { Injectable } from '@nestjs/common';
import * as packageJson from '../package.json';

@Injectable()
export class AppService {
  getVersion(): string {
    console.log('VERSION !');
    const version = packageJson.version;
    return version;
  }
}
