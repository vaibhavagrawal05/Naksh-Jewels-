import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-jewelry.jpg"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Exquisite Jewelry Collection
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover timeless pieces that tell your story
          </p>
          <Link
            href="/products"
            className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-center text-white text-2xl font-semibold">
                  {category.name}
                </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-black text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-black font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Each piece is crafted with the finest materials and attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-black font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders within India
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-black font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">
                All our jewelry comes with a lifetime warranty
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    name: 'Rings',
    image: '/categories/rings.jpg',
  },
  {
    name: 'Necklaces',
    image: '/categories/necklaces.jpg',
  },
  {
    name: 'Earrings',
    image: '/categories/earrings.jpg',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Diamond Solitaire Ring',
    price: 2499.99,
    imageUrl: '/products/diamond-ring.jpg',
  },
  {
    id: 2,
    name: 'Pearl Necklace',
    price: 899.99,
    imageUrl: '/products/pearl-necklace.jpg',
  },
  {
    id: 3,
    name: 'Sapphire Earrings',
    price: 1299.99,
    imageUrl: '/products/sapphire-earrings.jpg',
  },
  {
    id: 4,
    name: 'Gold Bracelet',
    price: 799.99,
    imageUrl: '/products/gold-bracelet.jpg',
  },
]; 