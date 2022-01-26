import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Todo } from './schema/todo.schema';
import { TodoService } from './todo.service';

@ApiTags('Todo')
@Controller({ path: 'todo', version: '1' })
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  @ApiOperation({ summary: 'Todo 리스트', description: 'Todo 리스트를 가져옵니다.' })
  find(): Promise<Todo[]> {
    return this.todoService.find();
  }

  @Get('/:id')
  @ApiOperation({ operationId: 'Todo' })
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Post('/')
  @ApiBody({ type: Todo })
  @ApiOperation({ operationId: 'Todo 등록' })
  create(@Body() { title, content }: Todo) {
    return this.todoService.create({ title, content });
  }

  @Patch('/:id')
  @ApiOperation({ operationId: 'Todo Toggle 변경' })
  isDone(@Param('id') id: string, @Body('isDone') isDone: boolean) {
    return this.todoService.isDone(id, isDone);
  }

  @Put(':/id')
  @ApiOperation({ operationId: 'Todo 내용 변경' })
  update(@Param('id') id: string, @Body() data: Todo) {
    return this.todoService.update(id, data);
  }

  @Delete('/:id')
  @ApiOperation({ operationId: 'Todo 삭제' })
  delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
