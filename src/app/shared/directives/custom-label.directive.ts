import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string){
    this._color= value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrosMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {

    //console.log(el);
    this.htmlElement = el;
  }


  ngOnInit(): void {
  //console.log('Directiva - NgOnInit');
  }

  setStyle(){
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color
  }

  setErrosMessage(){
    if (!this.htmlElement) return;
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = ''
      return;
    }

    const erros = Object.keys(this._errors);

    if (erros.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido'
      return;
    }

    if (erros.includes('minlength') ) {
      const min = this._errors!['minlength']['requiredLength']
      const current = this._errors!['minlength']['actualLength']
      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres.`;
      return;
    }

    if (erros.includes('email') ) {
      this.htmlElement.nativeElement.innerText = 'Es requerido que sea formato de correo electronico'
      return;
    }


  }

}
