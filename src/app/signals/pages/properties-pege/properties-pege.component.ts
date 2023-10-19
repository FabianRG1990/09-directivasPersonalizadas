import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-pege.component.html',
  styleUrls: ['./properties-pege.component.scss']
})
export class PropertiesPegeComponent {

  public user = signal<User>({
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}`)

  onFieldUpdated(field: keyof User, value: string){

    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    this.user.update( current => {
      return {
        ...current,
        [field]: value
      };
    } )

    // this.user.mutate( current => {

    //   switch(field){

    //     case 'email':
    //       current.email = value;
    //       break;

    //     case 'first_name':
    //       current.first_name = value;
    //       break;

    //     case 'last_name':
    //       current.last_name = value;
    //       break;
    //   }

    // } )

  }

}
