import {Cookbook} from './cookbook';

export interface Recipe {
  cookbook: Cookbook;
  page: number;
  ingredientList: string;
  instructionText: string;
}
