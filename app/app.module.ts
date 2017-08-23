import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { SkillsComponent } from './components/skills.component';
import { ContactsComponent } from './components/contacts.component';

@NgModule ({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent,
        HeaderComponent,
        SkillsComponent,
        ContactsComponent
    ],
    bootstrap : [
        AppComponent,
        HeaderComponent,
        SkillsComponent,
        ContactsComponent
    ]
})

export class AppModule {

}