// Mock data for the analytics dashboard

export const mockMetrics = {
  totalConversations: 15847,
  totalMessages: 98234,
  avgMessagesPerConversation: 6.2,
  mostQueriedBrand: "OpenAI"
};

export const mockLineChartData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  
  return {
    date: date.toISOString(),
    queries: Math.floor(Math.random() * 1000) + 500,
    conversations: Math.floor(Math.random() * 300) + 150
  };
});

export const mockBrandData = [
  { brand: "OpenAI", queries: 4521, conversations: 1234 },
  { brand: "Anthropic", queries: 3456, conversations: 987 },
  { brand: "Google", queries: 2890, conversations: 756 },
  { brand: "Microsoft", queries: 2134, conversations: 645 },
  { brand: "Meta", queries: 1876, conversations: 523 },
  { brand: "Cohere", queries: 1234, conversations: 398 }
];

export const mockWordCloudData = [
  { text: "AI", frequency: 450 },
  { text: "machine learning", frequency: 380 },
  { text: "neural networks", frequency: 320 },
  { text: "deep learning", frequency: 290 },
  { text: "Python", frequency: 280 },
  { text: "data science", frequency: 260 },
  { text: "chatbot", frequency: 240 },
  { text: "automation", frequency: 220 },
  { text: "algorithm", frequency: 200 },
  { text: "natural language", frequency: 190 },
  { text: "computer vision", frequency: 180 },
  { text: "tensorflow", frequency: 170 },
  { text: "regression", frequency: 160 },
  { text: "classification", frequency: 150 },
  { text: "clustering", frequency: 140 },
  { text: "recommendation", frequency: 130 },
  { text: "optimization", frequency: 120 },
  { text: "statistics", frequency: 110 },
  { text: "analytics", frequency: 100 },
  { text: "visualization", frequency: 90 },
  { text: "database", frequency: 85 },
  { text: "api", frequency: 80 },
  { text: "deployment", frequency: 75 },
  { text: "cloud", frequency: 70 },
  { text: "kubernetes", frequency: 65 },
  { text: "docker", frequency: 60 },
  { text: "microservices", frequency: 55 },
  { text: "scaling", frequency: 50 },
  { text: "monitoring", frequency: 45 },
  { text: "security", frequency: 40 }
];

export const mockHeatmapData = (() => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = [];
  
  for (const day of days) {
    for (let hour = 0; hour < 24; hour++) {
      // Simulate higher activity during business hours
      let baseValue = Math.random() * 50;
      if (hour >= 9 && hour <= 17 && !["Sat", "Sun"].includes(day)) {
        baseValue += Math.random() * 100;
      }
      if (hour >= 19 && hour <= 23) {
        baseValue += Math.random() * 30;
      }
      
      data.push({
        day,
        hour,
        value: Math.floor(baseValue)
      });
    }
  }
  
  return data;
})();

export const mockConversations = Array.from({ length: 50 }, (_, i) => {
  const brands = ["OpenAI", "Anthropic", "Google", "Microsoft"];
  const titles = [
    "How to implement machine learning in production",
    "Best practices for neural network optimization",
    "Understanding transformer architectures",
    "Building scalable AI applications",
    "Data preprocessing techniques for ML",
    "Computer vision model deployment",
    "Natural language processing with transformers",
    "Deep learning for time series analysis",
    "Reinforcement learning implementation",
    "MLOps pipeline setup and management"
  ];
  
  const createdDate = new Date();
  createdDate.setDate(createdDate.getDate() - Math.floor(Math.random() * 30));
  
  const lastActivity = new Date(createdDate);
  lastActivity.setHours(lastActivity.getHours() + Math.floor(Math.random() * 72));
  
  return {
    id: `conv-${i + 1}`,
    title: titles[Math.floor(Math.random() * titles.length)],
    userId: `user-${Math.floor(Math.random() * 1000) + 1}`,
    createdAt: createdDate.toISOString(),
    brand: brands[Math.floor(Math.random() * brands.length)],
    messageCount: Math.floor(Math.random() * 20) + 1,
    lastActivity: lastActivity.toISOString()
  };
}).sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime());