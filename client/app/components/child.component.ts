import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'child-comp',
  templateUrl: 'child.component.html'
})

export class ChildComponent  { 
	title: string;
	constructor() {
		this.title = 'Child component';
	}

}
