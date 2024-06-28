export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoModel implements ITodo {
  constructor(
    public id: string,
    public title: string,
    public completed: boolean,
  ) {}
}

export type TodoFilterType = 'all' | 'pending' | 'completed';
