import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as express from 'express';
import * as path from 'path';
import serveStatic from 'serve-static';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/info')
  getVersion(): string {
    console.log('hello')
    return this.appService.getVersion();
  }
}
