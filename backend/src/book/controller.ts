import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './service';
import { AddBookDto, EditBookDto } from './dtos';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllBooks() {
    return this.bookService.getAllBooks();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getBookById(@Param('id') id) {
    return this.bookService.getBookById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  addBook(@Body() addBookDto: AddBookDto) {
    return this.bookService.addBook(addBookDto);
  }
  @Put(':id')
  editBookById(@Param('id') id, @Body() editBookDto: EditBookDto) {
    return this.bookService.editBookById(id, editBookDto);
  }
  @Delete(':id')
  deleteBookById(@Param('id') id) {
    return this.bookService.deleteBookById(id);
  }
}
