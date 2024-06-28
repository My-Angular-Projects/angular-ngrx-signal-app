import { Injectable } from '@angular/core';
import { TODOS } from '../data';
import { ITodo } from '../model';

function delayFn(time: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  /**
   * Get all todos
   */
  public async getTodos(): Promise<ITodo[]> {
    await delayFn(1000);

    return TODOS;
  }
}
