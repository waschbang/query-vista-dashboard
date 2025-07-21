import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart3 } from "lucide-react";

interface BrandBarChartProps {
  data: Array<{
    brand: string;
    queries: number;
    conversations: number;
  }>;
}

export function BrandBarChart({ data }: BrandBarChartProps) {
  return (
    <Card className="bg-dashboard-card shadow-[var(--shadow-card)]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <CardTitle>Top AI Models by Usage</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="brand" 
              className="text-xs"
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Bar 
              dataKey="queries" 
              fill="hsl(var(--chart-primary))"
              radius={[4, 4, 0, 0]}
              name="Queries"
            />
            <Bar 
              dataKey="conversations" 
              fill="hsl(var(--chart-secondary))"
              radius={[4, 4, 0, 0]}
              name="Conversations"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}