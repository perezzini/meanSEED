import { Component } from '@angular/core';

@Component({
	moduleId: module.id, // use this in order to use relative paths
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
	name: string = 'Angular';
	description: string = 'Start from here! This is the root component!';

}
