import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";

// Import product images
import smartphone from "@/assets/smartphone.jpg";
import headphones from "@/assets/headphones.jpg";
import watch from "@/assets/watch.jpg";
import laptop from "@/assets/laptop.jpg";
import camera from "@/assets/camera.jpg";
import sneakers from "@/assets/sneakers.jpg";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Premium Smartphone",
      price: 799,
      image: smartphone,
      description:
        "Latest flagship smartphone with advanced features and premium build quality",
      stock: 15,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 299,
      image: headphones,
      description:
        "Noise-cancelling wireless headphones with premium sound quality",
      stock: 8,
    },
    {
      id: 3,
      name: "Luxury Watch",
      price: 1299,
      image: watch,
      description:
        "Sophisticated timepiece with premium materials and elegant design",
      stock: 3,
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: 1599,
      image: laptop,
      description:
        "High-performance laptop perfect for gaming and professional work",
      stock: 12,
    },
    {
      id: 5,
      name: "Professional Camera",
      price: 2299,
      image: camera,
      description:
        "DSLR camera with advanced features for professional photography",
      stock: 5,
    },
    {
      id: 6,
      name: "Designer Sneakers",
      price: 189,
      image: sneakers,
      description: "Stylish and comfortable sneakers with modern design",
      stock: 22,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto">
          <h1 className="p-5 text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our curated collection of premium products with unbeatable
            quality and prices
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Featured Products</h2>
              <p className="text-muted-foreground">
                {products.length} products found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
