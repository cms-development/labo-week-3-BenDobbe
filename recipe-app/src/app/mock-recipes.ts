declare var require: any;
import { Recipe } from './recipe';
// import * as data from '../json-files/recipes.json';
const data = require('../json-files/recipes.json');

export const RECIPES: Recipe[] = data;
