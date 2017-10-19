import { Component, Input } from '@angular/core';
import { SidebarItem } from './sidebarItem'

@Component({
    selector: 'app-enhance-sidebar',
    templateUrl: './enhancesidebarItem.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class sidebarItemComponent {

    private _item: SidebarItem;

    public isExpandable: Boolean = false;

    public isExpanded: Boolean = false;

    @Input() 
    set item(inputItem: SidebarItem) {
        this._item = inputItem;
        this.isExpandable = (inputItem.childrenSidebarItem.length > 0);
    }

    get item(): SidebarItem { 
        return this._item; 
    }

    addExpandClass() {
        this.isExpanded = !this.isExpanded;
    }
}