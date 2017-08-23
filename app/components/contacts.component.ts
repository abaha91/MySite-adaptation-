import { Component } from '@angular/core';

const contacts = [
    {
        type : 'mail',
        text : 'abashkin.91@mail.ru',
        href : 'mailto:abashkin.91@mail.ru'
    },
    {
        type : 'phone',
        text : '89110854304 (МТС)',
        href : 'tel:+79110854304'
    },
    {
        type : 'phone',
        text : '89214309487 (Мегафон)',
        href : 'tel:+79214309487'
    },
    {
        type : 'skype',
        text : 'keni__1',
        href : 'skype:keni__1?chat'
    }
];

@Component ({
    moduleId : module.id,
    selector : 'ng-Contacts',
    templateUrl : '../templates/contacts.component.html'
})

export class ContactsComponent {
    contacts = contacts;
}