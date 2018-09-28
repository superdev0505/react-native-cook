import {Navigation} from 'react-native-navigation';
import LeftSideMenu from './leftsidemenu';
import Login1 from './login/Login1';
import Categories from './categories/Categories';
import Categories3 from './categories/Categories3';
import CategoriesSelected from './categories/CategoriesSelected';
import CategoriesSearchList from './categories/CategoriesSearchList';
import CategoriesBarcode from './categories/CategoriesBarcode';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('exp.LeftSideMenu', () => LeftSideMenu);
    Navigation.registerComponent('exp.Home', () => Categories, store, Provider);
    Navigation.registerComponent('exp.Login1', () => Login1, store, Provider);
    Navigation.registerComponent('exp.Categories', () => Categories, store, Provider);
    Navigation.registerComponent('exp.Categories3', () => Categories3, store, Provider);
    Navigation.registerComponent('exp.CategoriesSelected', () => CategoriesSelected, store, Provider);
    Navigation.registerComponent('exp.CategoriesSearchList', () => CategoriesSearchList, store, Provider);
    Navigation.registerComponent('exp.CategoriesBarcode', () => CategoriesBarcode, store, Provider);
}