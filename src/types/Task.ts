export interface Task {
  id: string;
  title: string;
  caseNumber: string;
  description?: string;
  dueDate: string;
  status: 'open' | 'in-progress' | 'completed';
  attachment?: string; // for filename or URL
}
