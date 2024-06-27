import {User} from '@core/user.model';
import {Article} from "../shared/article.model";

export interface Review {
  user: User;
  article: Article;
  score?: number;
  opinion?: string;

}
