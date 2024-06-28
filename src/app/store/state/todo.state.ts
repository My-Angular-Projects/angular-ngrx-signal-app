import { ITodoState } from '../interface/todo-state.interface';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { TodoService } from '../../service';

export const initialState: ITodoState = {
  filter: 'all',
  isLoading: false,
  todos: [],
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, service = inject(TodoService)) => ({
    /** get all todos */
    async getTodos() {
      patchState(store, { isLoading: true });
      const todos = await service.getTodos();
      patchState(store, { todos, isLoading: false });
    },
  })),
);
