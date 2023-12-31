import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: String,
    price: String,
    rating: String,
    imgURL :String,
  });
  
  const Product = mongoose.model('Product', productSchema);

  export default Product;