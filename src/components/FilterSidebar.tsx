import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const FilterSidebar = () => {
  const categories = [
    "Electronics",
    "Computers",
    "Photography",
    "Accessories",
    "Fashion"
  ];

  return (
    <div className="w-64 p-6 bg-card border-r space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="mt-3 space-y-3">
            <Slider
              defaultValue={[0, 1000]}
              max={2000}
              step={50}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>$0</span>
              <span>$2000</span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <Label className="text-sm font-medium mb-3 block">Categories</Label>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <Label
                  htmlFor={category}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <Label className="text-sm font-medium mb-3 block">Availability</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="in-stock" />
              <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
                In Stock
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="out-of-stock" />
              <Label htmlFor="out-of-stock" className="text-sm font-normal cursor-pointer">
                Out of Stock
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;