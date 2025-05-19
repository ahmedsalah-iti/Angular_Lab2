import { Component } from '@angular/core';
import { TracksComponentComponent } from './tracks-component/tracks-component.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent,TracksComponentComponent,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
