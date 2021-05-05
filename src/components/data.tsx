interface book {
  id: React.Key;
  publisher: String;
  title: String;
  page_numbers: Number;
  rating: Number;
  isbn: Number;
  published_date: String;
}

const books: book[] = [
  {
    id: 1,
    publisher: "Randy",
    title: "Bearstain Bears",
    page_numbers: 43,
    rating: 4,
    isbn: 123443156784,
    published_date: "1990-2-20",
  },
  {
    id: 2,
    publisher: "Bob",
    title: "Bearstein Bears",
    page_numbers: 43,
    rating: 4,
    isbn: 123443156784,
    published_date: "1990-2-20",
  },
  {
    id: 3,
    publisher: "Jill",
    title: "Math book",
    page_numbers: 431,
    rating: 1,
    isbn: 123443156784,
    published_date: "1990-2-20",
  },
  {
    id: 4,
    publisher: "Jain",
    title: "Science book",
    page_numbers: 634,
    rating: 3,
    isbn: 165443156784,
    published_date: "1990-2-20",
  },
  {
    id: 5,
    publisher: "Will",
    title: "Literature book",
    page_numbers: 334,
    rating: 2,
    isbn: 123454356784,
    published_date: "1990-2-20",
  },
];

export default books;
