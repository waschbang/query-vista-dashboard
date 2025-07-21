import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquare } from "lucide-react";

interface Conversation {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
  brand: string;
  messageCount: number;
  lastActivity: string;
}

interface ConversationsTableProps {
  data: Conversation[];
}

export function ConversationsTable({ data }: ConversationsTableProps) {
  const getBrandColor = (brand: string) => {
    const colors: { [key: string]: string } = {
      'OpenAI': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
      'Anthropic': 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200',
      'Google': 'bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100',
      'Microsoft': 'bg-gray-400 text-gray-900 dark:bg-gray-500 dark:text-gray-100',
    };
    return colors[brand] || 'bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className="premium-card bg-dashboard-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <CardTitle>Recent Knowledge Sessions</CardTitle>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {data.length} sessions
        </Badge>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Messages</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Activity</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((conversation) => (
              <TableRow key={conversation.id} className="hover:bg-muted/5">
                <TableCell className="font-medium max-w-xs">
                  <div className="truncate" title={conversation.title}>
                    {conversation.title}
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {conversation.userId}
                </TableCell>
                <TableCell>
                  <Badge className={getBrandColor(conversation.brand)}>
                    {conversation.brand}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3 text-muted-foreground" />
                    {conversation.messageCount}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(conversation.createdAt)}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(conversation.lastActivity)}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}