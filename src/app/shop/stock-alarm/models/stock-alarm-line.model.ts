import {Article} from "../../shared/services/models/article.model";

export interface StockAlarmLine {
  article: Article;
  warning?: number;
  critical?: number;
}
