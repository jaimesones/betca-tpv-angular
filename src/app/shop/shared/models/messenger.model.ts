export interface Messenger {
  id: string;
  fromUser: string;
  toUser: string;
  subject: string;
  text: string;
  read: boolean;
}
