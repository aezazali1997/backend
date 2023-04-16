const Book = require('../models/Book');
const Shop = require('../models/Shop');
const XLSX = require('xlsx');
const Category = require('../models/Category');
const workbook1 = XLSX.readFile('../xmlFiles/shop.xlsx');
const workbook2 = XLSX.readFile('../xmlFiles/category.xlsx');


const worksheet1 = workbook1.Sheets['Sheet1'];
const shops = XLSX.utils.sheet_to_json(worksheet1);

// Shops

(async () => {
  await Promise.all(
    shops.map(async (shop) => {
      if (shop.name !== undefined) {
        await Shop.create({
          name: shop.name,
          description: shop.description,
          address: shop.address,
        });
      }
    })
  );
  console.log('Shops imported successfully');

})();

// Categories

const worksheet2 = workbook2.Sheets['Sheet1'];
const categories = XLSX.utils.sheet_to_json(worksheet2);

(async () => {
  await Promise.all(
    categories.map(async (category) => {


      if (category.name !== undefined) {

        await Category.create({
          name: category.name,
          description: category.description

        });
      }
    })
  );
  console.log('Categories imported successfully');
  process.exit()
})();
