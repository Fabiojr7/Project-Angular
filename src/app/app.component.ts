import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is a title for my Application';
  newTitle = '';

  setNewTitle(event: Event){
    this.newTitle = (<HTMLInputElement>event.target).value;
  }

  changeTitle(){
    this.title = this.newTitle;
  }
}
