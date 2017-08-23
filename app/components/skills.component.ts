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
    templateUrl : '../html/skills.component.html'
})

export class SkillsComponent {
    name = "Абашкин Геннадий";
    age = "26 лет";
    city = "Санкт-Петербург";
    specialization = "Front-end разработчик";
    skills = skills;
}