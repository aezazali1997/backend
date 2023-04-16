const XLSX = require('xlsx');
const Book = require('../models/Book');
const Shop = require('../models/Shop');
const workbook3 = XLSX.readFile('../xmlFiles/books.xlsx');


// books

const books_of_shop1 = workbook3.Sheets['Sheet1'];
const books = XLSX.utils.sheet_to_json(books_of_shop1);

(async () => {
  let shop = undefined
  await Promise.all(
    books.map(async (book) => {
      if (book.shopName !== undefined) {

        shop = await Shop.findOne({
          where: {
            name: book.shopName
          }
        })
        await Book.create({
          name: book.name,
          isbn: book.isbn,
          publisher: book.publisher,
          publicationDate: new Date(book.publicationDate),
          price: book.price,
          genre: Array.isArray(book.genre) ? book.genre.split(',').map((g) => g.trim()) : null,
          description: book.description,
          coverImage: book.coverImage,
          availability: true,
          rating: book.rating,
          user_rating_count: 0,
          sale: false,
          shopId: shop.shopId,
          categoryId: null,
        });
      }
    })
  );
  console.log(`books of ${shop.name} imported successfully`);
})();



const books_of_shop2 = workbook3.Sheets['Sheet2'];
const books2 = XLSX.utils.sheet_to_json(books_of_shop2);

(async () => {
  let shop = undefined;
  await Promise.all(
    books2.map(async (book) => {
      if (book.shopName !== undefined) {

        shop = await Shop.findOne({
          where: {
            name: book.shopName
          }
        })
        await Book.create({
          name: book.name,
          isbn: book.isbn,
          publisher: book.publisher,
          publicationDate: new Date(book.publicationDate),
          price: book.price,
          genre: Array.isArray(book.genre) ? book.genre.split(',').map((g) => g.trim()) : null,
          description: book.description,
          coverImage: book.coverImage,
          availability: true,
          rating: book.rating,
          user_rating_count: 0,
          sale: false,
          shopId: shop.shopId,
          categoryId: null,
        });
      }
    })
  );
  console.log(`books of ${shop.name} imported successfully`);
})();

const books_of_shop3 = workbook3.Sheets['Sheet3'];
const books3 = XLSX.utils.sheet_to_json(books_of_shop3);
(async () => {
  let shop=undefined;
  await Promise.all(
    books3.map(async (book) => {
      if(book.shopName !== undefined){
                  shop = await Shop.findOne({
                        where:{
                              name:book.shopName
                          }
                      })
                    await Book.create({
                            name: book.name,
                            isbn: book.isbn,
                            publisher: book.publisher,
                            publicationDate: new Date(book.publicationDate),
                            price: book.price,
                            genre: Array.isArray(book.genre) ? book.genre.split(',').map((g) => g.trim()) : null,
                            description: book.description,
                            coverImage: book.coverImage,
                            availability: true,
                            rating: book.rating,
                            user_rating_count: 0,
                            sale: false,
                    shopId: shop.shopId,
                    categoryId: null,
      });
    }
    })
  );
  console.log(`books of ${shop.name} imported successfully`);
})();

const books_of_shop4 = workbook3.Sheets['Sheet4'];
const books4 = XLSX.utils.sheet_to_json(books_of_shop4);

(async () => {
  let shop=undefined;
  await Promise.all(
    books4.map(async (book) => {
      if(book.shopName !== undefined){
                  shop = await Shop.findOne({
                        where:{
                              name:book.shopName
                          }
                      })
                    await Book.create({
                            name: book.name,
                            isbn: book.isbn,
                            publisher: book.publisher,
                            publicationDate: new Date(book.publicationDate),
                            price: book.price,
                            genre: Array.isArray(book.genre) ? book.genre.split(',').map((g) => g.trim()) : null,
                            description: book.description,
                            coverImage: book.coverImage,
                            availability: true,
                            rating: book.rating,
                            user_rating_count: 0,
                            sale: false,
                    shopId: shop.shopId,
                    categoryId: null,
      });
    }
    })
  );
  console.log(`books of ${shop.name} imported successfully`);
  process.exit()
})();

