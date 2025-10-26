import { Routes } from "@angular/router";
import { Add } from "./pages/add/add";
import { Home } from "./pages/home/home";
import { List } from "./pages/list/list";
import { Search } from "./pages/search/search";
import { Heroe } from "./pages/heroe/heroe";

export const routesHeroe: Routes = [
    {
        path: '',
        component: Home,
        children: [
            { path: 'add', component: Add },
            { path: 'edit/:id', component: Add },
            { path: 'list', component: List },
            { path: 'search', component: Search },
            { path: ':id', component: Heroe },
            { path: '**', redirectTo: 'list' },
        ]
    }
]