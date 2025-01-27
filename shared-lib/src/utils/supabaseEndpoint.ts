//   Simulate api calls to the backend

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://euyvpeqwvkwsdbfpimej.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1eXZwZXF3dmt3c2RiZnBpbWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MDI0NjMsImV4cCI6MjA1MzQ3ODQ2M30.P9KoFmam04Cs_qp3Mao35832uNizchjiA56RfxbAJUc';

export const supabase = createClient(supabaseUrl, supabaseKey);

interface Task {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
}

// Connection to endpoints
export const taskService = {
  async getAllTasks(): Promise<Task[]> {
    const { data, error } = await supabase.from('management-tool').select('*');
    if (error) throw error;
    return data || [];
  },
  async addTask(task: {
    title: string;
    description: string;
    is_completed: boolean;
  }) {
    const { data, error } = await supabase
      .from('management-tool')
      .insert({ ...task });
    alert('Successfully added your task');
    if (error) throw error;
    return data;
  },
  //   async addTask(task: {title: string; description: string; is_complete: boolean}) {
  //     try {
  //         let returnedData = await supabase
  //       .from('management-tool')
  //       .insert([{ task }]);
  //       return returnedData.data
  //     } catch (error) {
  //         console.log("An error occured from our end", error)
  //     }
  //   },
  async deleteTask(id: number) {
    const { data, error } = await supabase
      .from('management-tool')
      .delete()
      .eq('id', id);
    alert('Successfully deleted your todo');
    if (error) throw error;
    return data;
  },
};
