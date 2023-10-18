import { Component, signal } from '@angular/core';

interface MenuItem{
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
 //!angular hace referencia a sus señales (signals) como un nuevo tipo de primitivo: (string, boolen, number)
  public menuItems = signal<MenuItem[]>([
    {title: "Contador", route: "counter"},
    {title: "Usuario", route: "user-info"},
    {title: "Mutaciones", route: "properties"},
  ]);

  // public menuItems: MenuItem[] = [
  //   {title: "Contador", route: "counter"},
  //   {title: "Usuario", route: "user-info"},
  //   {title: "Mutaciones", route: "properties"},
  // ]



}
