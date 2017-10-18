export interface SidebarItem{
    routerURLs: string[];
    activeStyles: string[];
    iconStyle: string;
    name: string;
    childrenSidebarItem: SidebarItem[];
}

export const Items: SidebarItem[] = [
    {
        routerURLs: ['/dashboard'],
        activeStyles: ['router-link-active'],
        iconStyle: 'fa fa-fw fa-dashboard',
        name: 'Dashboard',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/charts'],
        activeStyles: ['router-link-active'],
        iconStyle: 'fa fa-fw fa-dashboard',
        name: 'Charts',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/forms'],
        activeStyles: ['router-link-active'],
        iconStyle: 'fa fa-fw fa-dashboard',
        name: 'Forms',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/bs-element'],
        activeStyles: ['router-link-active'],
        iconStyle: 'fa fa-fw fa-dashboard',
        name: 'Boostrap Element',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/grid'],
        activeStyles: ['router-link-active'],
        iconStyle: 'fa fa-fw fa-dashboard',
        name: 'Boostrap Grid',
        childrenSidebarItem: []
    },

    {
        routerURLs: ['/components'],
        activeStyles: ['router-link-active'],
        iconStyle: 'fa fa-fw fa-dashboard',
        name: 'Component',
        childrenSidebarItem: []
    },


];