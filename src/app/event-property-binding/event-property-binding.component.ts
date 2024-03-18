import { Component } from '@angular/core';

@Component({
  selector: 'app-event-property-binding',
  templateUrl: './event-property-binding.component.html',
  styleUrl: './event-property-binding.component.scss',
})
export class EventPropertyBindingComponent {
  inputText = 'Texto Inicial';

  //define a propriedade do type do nosso inpu
  inputType = 'text';

  isDisable = true;

  enableInput() {
    this.isDisable = false;
  }

  disableInput() {
    this.isDisable = true;
  }

  isTypeText() {
    this.inputType = 'text';
  }

  isTypePassword() {
    this.inputType = 'password';
  }

  valueBlue() {
    this.inputText = 'Azul';
  }

  valueRed() {
    this.inputText = 'Vermelho';
  }

  handleInputKeyup(event: KeyboardEvent) {
    //tipagem com a interface do elemento html
    const currentText = event.target as HTMLInputElement;
    console.log(currentText.value);
  }
}
