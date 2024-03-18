import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss',
})
export class AttributeBindingComponent {
  btnTitle = 'Texto informativo do botão';
  buttonDisable = false;

  onBtnClick() {
    this.btnTitle = 'Titulo Mudou';
    this.buttonDisable = !this.buttonDisable;
  }
}
