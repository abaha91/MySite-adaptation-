import { Component } from '@angular/core';

const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Jquery',
    'Jade',
    'Git',
    'Gulp',
    'Bower',
    'PHP',
    'MySql',
    'SASS',
    'Smarty',
    'Angular2'
];

@Component ({
    moduleId : module.id,
    selector : 'ng-Skills',
    templateUrl : '../templates/skills.component.html'
})

export class SkillsComponent {
    name: string = "Абашкин Геннадий";
    age: string = "26 лет";
    city: string = "Санкт-Петербург";
    specialization: string = "Front-end разработчик";
    skills = skills;
}