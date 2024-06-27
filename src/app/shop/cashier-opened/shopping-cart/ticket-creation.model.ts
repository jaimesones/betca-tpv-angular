import {Shopping} from './shopping.model';
import {User} from '../../shared/models/user.models';

export interface TicketCreation {
  user?: User;
  cash: number;
  card: number;
  voucher: number;
  note: string;
  shoppingList: Shopping[];
}
