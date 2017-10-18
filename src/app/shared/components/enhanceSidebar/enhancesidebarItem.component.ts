import { Component, Input } from '@angular/core';
import { SidebarItem, Items } from './sidebarItem'

@Component({
    selector: 'app-enhance-sidebar',
    templateUrl: './enhancesidebarItem.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class sidebarItemComponent {

    private _item: SidebarItem;

    private isExpandable: Boolean = false;

    @Input() 
    set item(inputItem: SidebarItem) {
        this._item = inputItem;
        this.isExpandable = (inputItem.childrenSidebarItem.length > 0);
    }

    get name(): SidebarItem { 
        return this._item; 
    }

}