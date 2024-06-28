import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodoStore } from '../../store/state/todo.state';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'sgn-home',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly store = inject(TodoStore);

  ngOnInit(): void {
    this.store.getTodos().then((v) => console.log(v));
  }
}
