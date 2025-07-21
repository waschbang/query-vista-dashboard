import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

interface QueryLineChartProps {
  data: Array<{
    date: string;
    queries: number;
    conversations: number;
  }>;
}

export function QueryLineChart({ data }: QueryLineChartProps) {
  return (
    <Card className="bg-dashboard-card shadow-[var(--shadow-card)]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <CardTitle>Queries Over Time</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
              className="text-xs"
            />
            <YAxis className="text-xs" />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Line 
              type="monotone" 
              dataKey="queries" 
              stroke="hsl(var(--chart-primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--chart-primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--chart-primary))', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="conversations" 
              stroke="hsl(var(--chart-secondary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--chart-secondary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--chart-secondary))', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}