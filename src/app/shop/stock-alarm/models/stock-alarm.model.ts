import {StockAlarmLine} from "./stock-alarm-line.model";

export interface StockAlarm {
  name: string;
  description: string;
  warning: number;
  critical: number;
  stockAlarmLines?: StockAlarmLine[];
}

