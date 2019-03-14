import { Component } from '@angular/core';

@Component({
    selector: 'nav-component',
    styleUrls: ['./nav.styles.scss'],
    templateUrl: 'nav.template.html'
})
export class NavComponent {
    title: string = 'Nav';
}