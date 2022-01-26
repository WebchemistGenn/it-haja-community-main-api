import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Todo, TodoDocument } from './schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todo: Model<TodoDocument>) {}

  find(condition?: FilterQuery<TodoDocument>): Promise<Todo[]> {
    return this.todo.find(condition).lean().exec();
  }

  findOne(id: string): Promise<Todo> {
    return this.todo.findById(id).lean().exec();
  }

  create(data: Omit<Todo, 'isDone' | 'priority' | 'date'>): Promise<Todo> {
    return this.todo.create(data);
  }

  isDone(id: string, isDone: boolean): Promise<Todo> {
    return this.todo.findByIdAndUpdate(id, { $set: { isDone } }, { new: true }).lean().exec();
  }

  update(id: string, data: Omit<Todo, 'isDone' | 'date'>): Promise<Todo> {
    return this.todo.findByIdAndUpdate(id, { $set: data }, { new: true }).lean().exec();
  }

  delete(id: string) {
    return this.todo.findByIdAndDelete(id);
  }
}
