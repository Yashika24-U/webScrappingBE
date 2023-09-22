import Product from "../models/schema.js"
// import  cheerio  from "cheerio";
// const $ = cheerio.load(response.data);



export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch products from the database
    console.log(products)
    res.json(products); // Send the products data as a JSON response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Inside your scrapeAmazonHomeDecor function, after scraping data
//  export const saveProduct = $('div.s-result-item').each(async (index, element) => {
//   const title = $(element).find('span.a-text-normal').text().trim();
//   const price = $(element).find('span.a-offscreen').text().trim();
//   const rating = $(element).find('span.a-icon-alt').text().trim();
//   const imgURL = $(element).find('img.s-image').attr('src');

  // Create a new Product instance and save it to the database
//   const product = new Product({
//     title,
//     price,
//     rating,
//     imgURL,
//   });

//   try {
//     await product.save(); // Save the product to the database
//   } catch (error) {
//     console.error('Error saving product to the database:', error);
//   }
// })










































  
