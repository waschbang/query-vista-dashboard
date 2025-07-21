import { useState } from "react";
import { Brain } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { QueryLineChart } from "@/components/dashboard/QueryLineChart";
import { BrandBarChart } from "@/components/dashboard/BrandBarChart";
import { WordCloud } from "@/components/dashboard/WordCloud";
import { QueryHeatmap } from "@/components/dashboard/QueryHeatmap";
import { ConversationsTable } from "@/components/dashboard/ConversationsTable";
import { 
  mockMetrics, 
  mockLineChartData, 
  mockBrandData, 
  mockWordCloudData, 
  mockHeatmapData, 
  mockConversations 
} from "@/data/mockData";

const Index = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // In a real app, this would trigger data refetching
    console.log("Filters changed:", newFilters);
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar onFilterChange={handleFilterChange} />
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-foreground">
                  Second Brain Dashboard
                </h1>
              </div>
              <p className="text-muted-foreground">
                Monitor AI conversations and knowledge interactions across your digital brain
              </p>
            </div>
            <ThemeToggle />
          </div>

          {/* Metrics Cards */}
          <div className="mb-8">
            <MetricsCards data={mockMetrics} />
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            <QueryLineChart data={mockLineChartData} />
            <BrandBarChart data={mockBrandData} />
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            <WordCloud data={mockWordCloudData} />
            <QueryHeatmap data={mockHeatmapData} />
          </div>

          {/* Conversations Table */}
          <ConversationsTable data={mockConversations.slice(0, 20)} />
        </div>
      </div>
    </div>
  );
};

export default Index;
