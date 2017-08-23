import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { SkillsComponent } from './components/skills.component';

@NgModule ({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent,
        HeaderComponent,
        SkillsComponent,
    ],
    bootstrap : [
        AppComponent,
        HeaderComponent,
        SkillsComponent,
    ]
})

export class AppModule {

}