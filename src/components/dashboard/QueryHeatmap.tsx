import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface HeatmapData {
  day: string;
  hour: number;
  value: number;
}

interface QueryHeatmapProps {
  data: HeatmapData[];
}

export function QueryHeatmap({ data }: QueryHeatmapProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const maxValue = Math.max(...data.map(d => d.value));
  
  const getIntensity = (value: number) => {
    const ratio = value / maxValue;
    if (ratio > 0.8) return "bg-chart-1 text-white";
    if (ratio > 0.6) return "bg-chart-1/80 text-white";
    if (ratio > 0.4) return "bg-chart-1/60";
    if (ratio > 0.2) return "bg-chart-1/40";
    if (ratio > 0) return "bg-chart-1/20";
    return "bg-muted/20";
  };

  const getValue = (day: string, hour: number) => {
    return data.find(d => d.day === day && d.hour === hour)?.value || 0;
  };

  return (
    <Card className="bg-dashboard-card shadow-[var(--shadow-card)]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <CardTitle>Brain Activity Patterns</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {/* Hour labels */}
          <div className="flex">
            <div className="w-12"></div>
            <div className="flex-1 grid grid-cols-24 gap-1">
              {hours.map(hour => (
                <div key={hour} className="text-xs text-center text-muted-foreground">
                  {hour % 6 === 0 ? hour.toString().padStart(2, '0') : ''}
                </div>
              ))}
            </div>
          </div>
          
          {/* Heatmap grid */}
          {days.map(day => (
            <div key={day} className="flex items-center">
              <div className="w-12 text-xs text-muted-foreground">{day}</div>
              <div className="flex-1 grid grid-cols-24 gap-1">
                {hours.map(hour => {
                  const value = getValue(day, hour);
                  return (
                    <div
                      key={`${day}-${hour}`}
                      className={`h-4 rounded-sm transition-all duration-200 hover:scale-110 cursor-default ${getIntensity(value)}`}
                      title={`${day} ${hour}:00 - ${value} queries`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-2 pt-4 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-muted/20 rounded-sm"></div>
              <div className="w-3 h-3 bg-chart-1/20 rounded-sm"></div>
              <div className="w-3 h-3 bg-chart-1/40 rounded-sm"></div>
              <div className="w-3 h-3 bg-chart-1/60 rounded-sm"></div>
              <div className="w-3 h-3 bg-chart-1/80 rounded-sm"></div>
              <div className="w-3 h-3 bg-chart-1 rounded-sm"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}