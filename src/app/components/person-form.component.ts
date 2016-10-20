import { Component } from '@angular/core';

export class Person {
	constructor(
		public name: string,
		public favoriteColor: string
	){}
}

@Component({
	selector: 'person-form',
	templateUrl: './person-form.component.html',
	styleUrls: ['./person-form.component.css']
})

export class PersonFormComponent {
	
	model = new Person('','');
	modelFilled = false;
	active = true;
	submitted = false;

	get responseMessage() {
	return "My name is " + this.model.name + " and my favorite color is " + this.model.favoriteColor;
	}
	
	onSubmit(form: any): void { 
		 console.log('you submitted value:', form);
		 this.newPerson(form.name, form.favColor);
	}

	get diagnostic() {
		return JSON.stringify(this.model)
	}


	newPerson(name:string, color:string) {
		this.model = new Person(name, color);
		this.modelFilled = true;
		this.active = false;
		setTimeout(() => this.active = true, 0);
		return this.model;
	}
}