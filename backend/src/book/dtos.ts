export class AddBookDto {
  readonly title: string;
  readonly author: string;
  readonly price: number;
  readonly genere: string;
  readonly publisher: string;
}

export class EditBookDto {
  readonly title: string;
  readonly author: string;
  readonly price: number;
  readonly genre: string;
  readonly publisher: string;
}
