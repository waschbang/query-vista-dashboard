import { useState } from "react";
import { Calendar, Filter, Search, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/dashboard/DateRangePicker";

interface SidebarProps {
  onFilterChange: (filters: any) => void;
}

export function Sidebar({ onFilterChange }: SidebarProps) {
  const [filters, setFilters] = useState({
    dateRange: null,
    brand: "",
    model: "",
    userId: "",
    keyword: ""
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Card className="w-80 h-full p-6 border-r bg-dashboard-card">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      
      <div className="space-y-6">
        {/* Date Range */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </Label>
          <DatePickerWithRange 
            onDateChange={(range) => handleFilterChange("dateRange", range)}
          />
        </div>

        {/* Brand Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Brand
          </Label>
          <Select onValueChange={(value) => handleFilterChange("brand", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="openai">OpenAI</SelectItem>
              <SelectItem value="anthropic">Anthropic</SelectItem>
              <SelectItem value="google">Google</SelectItem>
              <SelectItem value="microsoft">Microsoft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Model Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Model</Label>
          <Select onValueChange={(value) => handleFilterChange("model", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
              <SelectItem value="gpt-4">GPT-4</SelectItem>
              <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
              <SelectItem value="claude-3">Claude-3</SelectItem>
              <SelectItem value="gemini">Gemini</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* User ID Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <User className="h-4 w-4" />
            User ID
          </Label>
          <Input 
            placeholder="Enter user ID"
            value={filters.userId}
            onChange={(e) => handleFilterChange("userId", e.target.value)}
          />
        </div>

        {/* Keyword Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Search className="h-4 w-4" />
            Query Keyword
          </Label>
          <Input 
            placeholder="Search queries"
            value={filters.keyword}
            onChange={(e) => handleFilterChange("keyword", e.target.value)}
          />
        </div>

        {/* Reset Filters */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            setFilters({
              dateRange: null,
              brand: "",
              model: "",
              userId: "",
              keyword: ""
            });
            onFilterChange({});
          }}
        >
          Reset Filters
        </Button>
      </div>
    </Card>
  );
}