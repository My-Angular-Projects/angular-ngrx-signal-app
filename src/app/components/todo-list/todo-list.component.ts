import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { TodoStore } from '../../store/state/todo.state';

@Component({
  selector: 'sgn-todo-list',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatSuffix,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSelectionList,
    MatListOption,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  public readonly store = inject(TodoStore);
}
