import { Connection } from 'mongoose';
import { Controller, Get, Render } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { HealthCheck, HealthCheckService, MongooseHealthIndicator } from '@nestjs/terminus';

@Controller()
export class AppController {
  constructor(private health: HealthCheckService, private db: MongooseHealthIndicator, @InjectConnection('main') private mainDBConnection: Connection) {}

  @Get('/health')
  @HealthCheck()
  healthCheck() {
    return this.health.check([() => this.db.pingCheck('main', { connection: this.mainDBConnection })]);
  }

  @Get()
  @Render('index.ejs')
  main() {
    return { title: 'Welcome Haja Community API' };
  }
}
