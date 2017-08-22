import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { SkillsComponent } from './skills.component';

@NgModule({
    imports : [BrowserModule],
    declarations : [HeaderComponent, SkillsComponent],
    bootstrap : [HeaderComponent, SkillsComponent]
})
export class AppModule {

}