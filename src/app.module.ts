import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { TodoModule } from './routes/todo/todo.module';
import { CustomerModule } from './routes/customer/customer.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TodoModule, CustomerModule, TerminusModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
