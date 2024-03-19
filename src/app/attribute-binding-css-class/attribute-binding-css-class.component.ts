import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-attribute-binding-css-class',
  templateUrl: './attribute-binding-css-class.component.html',
  styleUrl: './attribute-binding-css-class.component.scss',
})
export class AttributeBindingCssClassComponent implements OnInit {
  ngOnInit(): void {}

  isRedButton = true;
  isGreen = true;
  isRed = true;

  isRedProp = true;
}
