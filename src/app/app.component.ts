import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showRecipe = true;

  public onNotifyClicked(message: string): void {
    this.showRecipe = message === 'recipe' ? true : false;
  }
}
