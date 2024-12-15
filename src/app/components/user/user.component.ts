import { Component, EventEmitter, Input, output, Output } from '@angular/core';

import { User } from '../../models/user';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../../dummy-api/dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({required: true}) selected!: boolean;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Signals Approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
