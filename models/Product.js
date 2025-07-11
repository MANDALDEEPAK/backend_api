import mongoose from "mongoose";

export const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];
export const brands = ["Apple", "Samsung", "Addidas", "Google", "Tanishq"];

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [10, 'please provide minimum 10 characters'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: categories,
    required: true
  },
  brand: {
    type: String,
    enum: brands,
    required: true
  },
  reviews: [
    {
      username: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ]
}, { timestamps: true });



const Product = mongoose.model('Product', productSchema);

export default Product;


