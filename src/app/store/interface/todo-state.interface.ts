import { ITodo, TodoFilterType } from '../../model';

export interface ITodoState {
  todos: ITodo[];
  isLoading: boolean;
  filter: TodoFilterType;
}
