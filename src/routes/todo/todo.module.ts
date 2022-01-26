import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schema/todo.schema';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }], 'main')],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
