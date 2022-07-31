import { Module } from '@nestjs/common';
import { BookController } from './controller';
import { BooksProvider } from './provider';
import { BookService } from './service';

@Module({
  controllers: [BookController],
  providers: [BookService, BooksProvider],
})
export class BookModule {}
