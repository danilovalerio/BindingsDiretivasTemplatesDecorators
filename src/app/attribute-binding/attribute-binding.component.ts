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

  widthBtn = '115px';
  widthBtnDois = '130';

  stylesObj = {
    width: '160px',
    backgroundColor: 'gray',
  };

  updateStylesObj() {
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  updateStylesObjCorreto() {
    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue',
    };
  }

  updateWidthBtnDois() {
    this.widthBtnDois = '180';
  }
}
