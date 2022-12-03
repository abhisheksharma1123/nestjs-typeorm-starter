import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY')
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }
}
