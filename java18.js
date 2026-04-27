const books = [
  { title: "Book A", authorName: "Author 1", releaseYear: 1940 },
  { title: "Book B", authorName: "Author 2", releaseYear: 1925 },
  { title: "Book C", authorName: "Author 3", releaseYear: 1950 },
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear > book2.releaseYear) return 1;
  return 0;
};

const filteredBooks = books.filter((book) => book.releaseYear < 1950);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);
