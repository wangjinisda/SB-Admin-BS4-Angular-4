export interface SidebarItem{
    routerURLs: string[];
    activeStyles: string[];
    name: string;
    childrenSidebarItem: SidebarItem[];
}

export const items: SidebarItem[] = [
    {
        routerURLs: ['/dashboard'],
        activeStyles: ['router-link-active'],
        name: 'Dashboard',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/charts'],
        activeStyles: ['router-link-active'],
        name: 'Charts',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/forms'],
        activeStyles: ['router-link-active'],
        name: 'Forms',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/bs-element'],
        activeStyles: ['router-link-active'],
        name: 'Boostrap Element',
        childrenSidebarItem: []
    },
    {
        routerURLs: ['/grid'],
        activeStyles: ['router-link-active'],
        name: 'Boostrap Grid',
        childrenSidebarItem: []
    },

    {
        routerURLs: ['/components'],
        activeStyles: ['router-link-active'],
        name: 'Component',
        childrenSidebarItem: []
    },


];