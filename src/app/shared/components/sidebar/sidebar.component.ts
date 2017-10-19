import { Component } from '@angular/core';
import { SidebarItem, Items } from '../enhanceSidebar/sidebarItem'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    private items = Items;
    isActive = false;
    showMenu = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }


    
}
