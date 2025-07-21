import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface WordData {
  text: string;
  frequency: number;
}

interface WordCloudProps {
  data: WordData[];
}

export function WordCloud({ data }: WordCloudProps) {
  // Sort words by frequency
  const sortedWords = [...data].sort((a, b) => b.frequency - a.frequency);
  
  // Get max frequency for scaling
  const maxFreq = Math.max(...data.map(w => w.frequency));
  
  const getWordSize = (frequency: number) => {
    const ratio = frequency / maxFreq;
    return Math.max(12, Math.floor(ratio * 32));
  };

  const getWordColor = (frequency: number) => {
    const ratio = frequency / maxFreq;
    if (ratio > 0.7) return "text-chart-1";
    if (ratio > 0.5) return "text-chart-2";
    if (ratio > 0.3) return "text-chart-3";
    if (ratio > 0.1) return "text-chart-4";
    return "text-chart-5";
  };

  return (
    <Card className="bg-dashboard-card shadow-[var(--shadow-card)]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          <CardTitle>Most Common Query Terms</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 justify-center items-center min-h-[250px] p-4">
          {sortedWords.slice(0, 30).map((word, index) => (
            <span
              key={index}
              className={`font-semibold transition-all duration-200 hover:scale-110 cursor-default ${getWordColor(word.frequency)}`}
              style={{ fontSize: `${getWordSize(word.frequency)}px` }}
              title={`${word.text}: ${word.frequency} occurrences`}
            >
              {word.text}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}