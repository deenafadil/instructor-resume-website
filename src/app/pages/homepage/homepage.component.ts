import { Component } from '@angular/core';

@Component({ 
    selector: 'homepage',
    styleUrls: ['./homepage.styles.scss'],
    templateUrl: './homepage.template.html'
})
export class HomepageComponent {
    title: string = 'Homepage';
}