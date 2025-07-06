import axios from 'axios';
import { Task } from '../types/Task';

const API = 'http://localhost:4000/tasks';

export const getTasks = () => axios.get<Task[]>(API);
export const getTask = (id: string) => axios.get<Task>(`${API}/${id}`);
export const createTask = (formData: FormData) =>
  axios.post<Task>(API, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const updateStatus = (id: string, status: string) => axios.patch<Task>(`${API}/${id}/status`, { status });
export const deleteTask = (id: string) => axios.delete(`${API}/${id}`);
