import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterProps {
  onSearchChange: (value: string) => void;
  onFilterChange: (filters: { category: string; location: string }) => void;
  filters: { category: string; location: string };
  categories: { value: string; label: string }[];
  locations: { value: string; label: string }[];
}

export function OpportunityFilters({ onSearchChange, onFilterChange, filters, categories, locations }: FilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        type="search"
        placeholder="Search by keyword or organization..."
        className="flex-grow"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="flex gap-4">
        <Select
          value={filters.category}
          onValueChange={(value) => onFilterChange({ ...filters, category: value })}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={filters.location}
          onValueChange={(value) => onFilterChange({ ...filters, location: value })}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc.value} value={loc.value}>{loc.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
