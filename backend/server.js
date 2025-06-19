const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory products array
let products = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499.99,
    imageUrl: "/products/diamond-ring.jpg",
    category: "Rings",
    description: "A stunning 1 carat diamond solitaire ring set in 18k white gold."
  },
  {
    id: 2,
    name: "Pearl Necklace",
    price: 899.99,
    imageUrl: "/products/pearl-necklace.jpg",
    category: "Necklaces",
    description: "Elegant freshwater pearl necklace with sterling silver clasp."
  },
  {
    id: 3,
    name: "Sapphire Earrings",
    price: 1299.99,
    imageUrl: "/products/sapphire-earrings.jpg",
    category: "Earrings",
    description: "Beautiful blue sapphire and diamond drop earrings."
  }
];

// API Routes

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// POST new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    category: req.body.category,
    description: req.body.description
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  products.splice(productIndex, 1);
  res.status(200).json({ message: 'Product deleted successfully' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 