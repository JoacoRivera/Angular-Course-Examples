import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { newTask, Task } from '../../../models/task';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  @Input({required: true}) userID!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<newTask>();
  // Other way to inject a dependency instead of using the constructor
  private tasksService = inject(TasksService);

  onCreateTask() {
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // })

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userID)
    this.close.emit();
  }

  onCancelTask() {
    this.close.emit();
  }
}
