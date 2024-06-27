import {TechnicalSupportAnswer} from "./technical-support-answer.model";

export interface TechnicalSupportRequest{
  identifier: string;
  request:string;
  answers: TechnicalSupportAnswer[];
  resolved:boolean;
}
