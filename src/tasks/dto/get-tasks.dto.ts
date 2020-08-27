import { TaskStatus } from '../task.model';

export class GetTasksFilterData {
  status: TaskStatus;
  search: string;
}
