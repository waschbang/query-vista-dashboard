import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, TrendingUp, Award } from "lucide-react";

interface MetricsData {
  totalConversations: number;
  totalMessages: number;
  avgMessagesPerConversation: number;
  mostQueriedBrand: string;
}

interface MetricsCardsProps {
  data: MetricsData;
}

export function MetricsCards({ data }: MetricsCardsProps) {
  const metrics = [
    {
      title: "Total Conversations",
      value: data.totalConversations.toLocaleString(),
      change: "+12.3%",
      icon: MessageSquare,
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      title: "Total Messages",
      value: data.totalMessages.toLocaleString(),
      change: "+8.7%",
      icon: Users,
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600"
    },
    {
      title: "Avg. Messages/Conversation",
      value: data.avgMessagesPerConversation.toFixed(1),
      change: "-2.1%",
      icon: TrendingUp,
      gradient: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      title: "Most Queried Brand",
      value: data.mostQueriedBrand,
      change: "OpenAI",
      icon: Award,
      gradient: "bg-gradient-to-r from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isNegative = metric.change.startsWith("-");
        
        return (
          <Card key={index} className="relative overflow-hidden bg-dashboard-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${metric.gradient}`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {metric.value}
              </div>
              <div className="flex items-center mt-1">
                <span className={`text-xs font-medium ${
                  isNegative ? "text-red-600" : "text-green-600"
                }`}>
                  {metric.change}
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  vs last month
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}