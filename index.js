import express from 'express';
import Connection from './db/conn.js';
import routes from './routes/routes.js';
import Product from './models/schema.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
import cheerio  from 'cheerio';
import fs from 'fs';
import cron from 'node-cron'; // Import the cron library

const app = express();
app.use(cors());
app.use(bodyParser.json()));


// Function to scrape Amazon Home Decor product data
const scrapeAmazonHomeDecor = async () => {
 try {
   // Make an HTTP GET request to the Amazon Home Decor page
   const response = await axios.get('https://www.amazon.com/s?k=home+decor', {
     headers: {
       "User-Agent":
         "Mozilla/5.0 (Linux; Android 5.1; AFTS Build/LMY47O) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/41.99900.2250.0242 Safari/537.36",
     },
   });

   // Load the HTML content of the page into Cheerio
   const $ = cheerio.load(response.data);

   // Extract data from the HTML using CSS selectors
   const products = [];
   // Iterate through product elements
   $('div.s-result-item').each((index, element) => {
     const title = $(element).find('span.a-text-normal').text().trim();
     const price = $(element).find('span.a-offscreen').text().trim();
     const rating = $(element).find('span.a-icon-alt').text().trim();
     const imgURL = $(element).find('img.s-image').attr('src');

     // Create a data object for each product
     const productData = {
       title,
       price,
       rating,
       imgURL,
     };
     

     products.push(productData);
    });

   // Serialize the data object to JSON
   const jsonData = JSON.stringify(products, null, 2);
   console.log(jsonData);
   await Product.insertMany(products);
   // Write the JSON data to a local file
   fs.writeFileSync('amazon_home_decor_data.json', jsonData, 'utf8');

   console.log('Amazon Home Decor product data scraped and saved.');
 } catch (error) {
   console.error('Error scraping Amazon Home Decor:', error);
 }
};

// Schedule the scraping to occur every 12 hours
cron.schedule('0 */12 * * *', () => {
 console.log('Running Amazon Home Decor scraper...');
//  scrapeAmazonHomeDecor();
 console.log('Data Scrapped');
});

app.use('/',routes);

const PORT = 7001;
app.listen(PORT, () => {
   Connection();
 console.log(`Server started at ${PORT}`);
});









































