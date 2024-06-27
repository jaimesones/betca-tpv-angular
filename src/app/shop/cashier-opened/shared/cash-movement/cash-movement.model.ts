import {CashMovementType} from "./cash-movement-type.model";


export interface CashMovement {
  cash: number;
  type: CashMovementType;
  description: string;
}
