import { Inject, Injectable } from '@nestjs/common';
import { Book } from './model';
import { PROVIDER } from './provider';

@Injectable()
export class BookService {
  constructor(
    @Inject(PROVIDER)
    private readonly bookRepository: typeof Book,
  ) {}

  async getAllBooks() {
    const books = await this.bookRepository.findAll();
    return books;
  }

  async getBookById(id: string) {
    const book = await this.bookRepository.findOne({ where: { id: id } });
    return book;
  }

  async addBook(book: Partial<Book>) {
    return await this.bookRepository.create(book);
  }

  async editBookById(id: string, book: Partial<Book>) {
    const found = await this.bookRepository.findOne({ where: { id: id } });

    if (!found) throw new Error('book not found');

    const { title, price, author, publisher, genre } = book;
    found.title = title;
    found.price = price;
    found.author = author;
    found.genre = genre;
    found.publisher = publisher;

    await book.save();
    return book;
  }

  async deleteBookById(id: string): Promise<void> {
    const book = await this.bookRepository.findOne({ where: { id: id } });

    if (!book) throw new Error('book not found');

    book.destroy();
  }
}
