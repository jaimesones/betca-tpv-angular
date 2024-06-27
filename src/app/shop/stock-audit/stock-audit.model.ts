import {ArticleLoss} from "./Article-Loss.model";
import {Article} from "../shared/services/models/article.model";

export class StockAudit{
  id:string;
  creationDate:Date;
  closeDate?:Date;
  articlesWithoutAudit?:Article[];
  lossValue?:number;
  articleLoss?:ArticleLoss[];
}
