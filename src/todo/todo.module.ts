import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { todoProviders } from './todo.provider';
import { TodoService } from './todo.service';

@Module({
  imports: [DatabaseModule],
  providers: [...todoProviders, TodoService],
})
export class TodoModule {}
