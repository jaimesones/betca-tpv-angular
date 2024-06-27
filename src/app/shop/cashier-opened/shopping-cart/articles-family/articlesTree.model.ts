import {TreeType} from './TreeType';

export interface ArticlesTree {
  reference:string,
  description:string,
  treeType:TreeType,
  price?:number,
  stock?:number
}
