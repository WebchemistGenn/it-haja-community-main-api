import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Priority } from 'src/routes/enum';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true, versionKey: false, read: 'secondaryPreferred', collection: 'todo' })
export class Todo {
  @Prop({ default: false })
  @ApiProperty({ description: '할일의 실행 여부', required: false })
  isDone: boolean;

  @Prop({ default: 'P2' })
  @ApiProperty({ description: '할일 중요도' })
  priority: Priority;

  @Prop({ required: true })
  @ApiProperty({ description: '할일의 제목' })
  title: string;

  @Prop({ required: true })
  @ApiProperty({ description: '할일의 내용' })
  content: string;

  @Prop({ default: Date.now })
  @ApiProperty({ description: '할일의 등록 날짜', required: false })
  date: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
