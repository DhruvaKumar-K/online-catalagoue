import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
}

const ProductCard = ({ name, price, image, description, stock }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-background">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                ${price}
              </p>
              <p className="text-xs text-muted-foreground">
                {stock > 0 ? `${stock} in stock` : 'Out of stock'}
              </p>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
              disabled={stock === 0}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;