import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BindingsDiretivasTemplatesDecorators';
  inputText = 'Texto Inicial';

  //define a propriedade do type do nosso inpu
  inputType = 'text';

  isDisable = true;
}
