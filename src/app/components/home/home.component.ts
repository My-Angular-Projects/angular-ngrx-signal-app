import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodoStore } from '../../store/state/todo.state';

@Component({
  selector: 'sgn-home',
  standalone: true,
  imports: [],
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
