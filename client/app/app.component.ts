import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent  { 
	title: string;
	description: string;
	url: string;

	constructor() {
		this.title = 'meanSEED';
		this.description = 'Start from here! This is the root component!';
		this.url = 'https://github.com/perezzini/meanSEED';
	}

}
