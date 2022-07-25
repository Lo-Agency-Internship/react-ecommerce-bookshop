import { Injectable } from '@nestjs/common';
import { AddBookDto } from '../dto/add-book.dto';
import { EditBookDto } from '../dto/edit-Book.dto';


const Book = require('../../database/book')
const User = require('../../database/user')
const Order = require('../../database/order')
const BookOrder = require('../../database/bookByOrder')



@Injectable()
export class BookService {
  async getAllBooks() {
    const books = await Book.findAll();
    return books
  }

  async getBookById(id){
    const book = await Book.findOne({where:{id:id}})
    return book
  }

  async addBook(addBookDto:AddBookDto){
    const book = await Book.create(addBookDto)
    return book
  }

  async editBookById(id,editBookDto:EditBookDto){
    const book = await Book.findOne({where:{id:id}})
    const {title,price,author,publisher,genre} = editBookDto;
    book.title = title;
    book.price = price;
    book.author = author;
    book.genre = genre;
    book.publisher = publisher;
    
    book.save().then(()=>console.log('updated book'))
    return book
  }

  async deleteBookById(id){
    const book = await Book.findOne({where:{id:id}})
    book.destroy()
    return 'deleted row'
  }


}
