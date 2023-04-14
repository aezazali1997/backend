const XLSX = require('xlsx');
const sequelize = require('./db');  
const Book = require('../models/Book');
const Shop = require('../models/Shop');
const Category = require('../models/Category');
const workbook1 = XLSX.readFile('../xmlFiles/Book.xlsx');


// Delete all the data and sync the tables
sequelize.sync({

})
// const workbook2 = XLSX.readFile('../xmlFiles/category.xlsx');
// const workbook3 = XLSX.readFile('../xmlFiles/shop.xlsx')

// const worksheet6 = workbook2.Sheets['Sheet1'];
// const data6 = XLSX.utils.sheet_to_json(worksheet6);

// (async () => {
//   await Promise.all(
//     data4.map(async (row) => {
//       if(row.name !== undefined){

//                   const category= await Category.findOne({
//                         where:{
//                               name:row.name
//                           }
//                       })
//                     await category.create({
//                             name: row.name,                            
//                             description: row.description

//       });
//     }
//     })
//   );
//   console.log('Data imported successfully');
//   process.exit()
// })();








const worksheet1 = workbook.Sheets['Sheet1'];
const data1 = XLSX.utils.sheet_to_json(worksheet1);

// (async () => {
//   await Book.sync({ force: true }); // drop and re-create tables
//   await Promise.all(
//     data1.map(async (row) => {
//       if(row.shopName !== undefined){

//                   const shop = await Shop.findOne({
//                         where:{
//                               name:row.shopName
//                           }
//                       })
//                     await Book.create({
//                             name: row.name,
//                             isbn: row.isbn,
//                             publisher: row.publisher,
//                             publicationDate: new Date(row.publicationDate),
//                             price: row.price,
//                             genre: Array.isArray(row.genre) ? row.genre.split(',').map((g) => g.trim()) : null,
//                             description: row.description,
//                             coverImage: row.coverImage,
//                             availability: true,
//                             rating: row.rating,
//                             user_rating_count: 0,
//                             sale: false,
//                     shopId: shop.shopId,
//                     categoryId: null,
//       });
//     }
//     })
//   );
//   console.log('Data imported successfully');
//   process.exit()
// })();



const worksheet2 = workbook.Sheets['Sheet2'];
const data2 = XLSX.utils.sheet_to_json(worksheet2);

// (async () => {
//   await Promise.all(
//     data2.map(async (row) => {
//       if(row.shopName !== undefined){

//                   const shop = await Shop.findOne({
//                         where:{
//                               name:row.shopName
//                           }
//                       })
//                     await Book.create({
//                             name: row.name,
//                             isbn: row.isbn,
//                             publisher: row.publisher,
//                             publicationDate: new Date(row.publicationDate),
//                             price: row.price,
//                             genre: Array.isArray(row.genre) ? row.genre.split(',').map((g) => g.trim()) : null,
//                             description: row.description,
//                             coverImage: row.coverImage,
//                             availability: true,
//                             rating: row.rating,
//                             user_rating_count: 0,
//                             sale: false,
//                     shopId: shop.shopId,
//                     categoryId: null,
//       });
//     }
//     })
//   );
//   console.log('Data imported successfully');
//     process.exit();
// })();

// const worksheet3 = workbook.Sheets['Sheet3'];
// const data3 = XLSX.utils.sheet_to_json(worksheet3);

// (async () => {
//   await Promise.all(
//     data3.map(async (row) => {
//       if(row.shopName !== undefined){

//                   const shop = await Shop.findOne({
//                         where:{
//                               name:row.shopName
//                           }
//                       })
//                     await Book.create({
//                             name: row.name,
//                             isbn: row.isbn,
//                             publisher: row.publisher,
//                             publicationDate: new Date(row.publicationDate),
//                             price: row.price,
//                             genre: Array.isArray(row.genre) ? row.genre.split(',').map((g) => g.trim()) : null,
//                             description: row.description,
//                             coverImage: row.coverImage,
//                             availability: true,
//                             rating: row.rating,
//                             user_rating_count: 0,
//                             sale: false,
//                     shopId: shop.shopId,
//                     categoryId: null,
//       });
//     }
//     })
//   );
//   console.log('Data imported successfully');
//   process.exit();
// })();


const worksheet4 = workbook.Sheets['Sheet4'];
const data4 = XLSX.utils.sheet_to_json(worksheet4);

(async () => {
  await Promise.all(
    data4.map(async (row) => {
      if(row.shopName !== undefined){

                  const shop = await Shop.findOne({
                        where:{
                              name:row.shopName
                          }
                      })
                    await Book.create({
                            name: row.name,
                            isbn: row.isbn,
                            publisher: row.publisher,
                            publicationDate: new Date(row.publicationDate),
                            price: row.price,
                            genre: Array.isArray(row.genre) ? row.genre.split(',').map((g) => g.trim()) : null,
                            description: row.description,
                            coverImage: row.coverImage,
                            availability: true,
                            rating: row.rating,
                            user_rating_count: 0,
                            sale: false,
                    shopId: shop.shopId,
                    categoryId: null,
      });
    }
    })
  );
  console.log('Data imported successfully');
  process.exit()
})();





// const worksheet9 = workbook3.Sheets['Sheet1'];
// const data9 = XLSX.utils.sheet_to_json(worksheet9);

// (async () => {
//   await Promise.all(
//     data9.map(async (row) => {
//       if(row.name !== undefined){

                  
//                     await Shop.create({
//                             name: row.name,
//                             description: row.description,
//                             address: row.address,
//       });
//     }
//     })
//   );
//   console.log('Data imported successfully');
//   process.exit()
// })();



