import { Component } from '@angular/core';

export class Person {
	name: string;
	favoriteColor: string;
}

@Component({
	moduleId: module.id,
	selector: 'person-form',
	templateUrl: './person-form.component.html',
	styleUrls: ['./person-form.component.css']
})

export class PersonFormComponent {
	
	model = new Person;

	submitted = false;
	onSubmit() { this.submitted = true; }

	get diagnostic() {
		return JSON.stringify(this.model)
	}
}