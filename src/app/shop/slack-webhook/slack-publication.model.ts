import {SlackPublicationCategory} from "./slack-publication-category.model";

export class SlackPublication {
  title: string;
  name: string;
  slackUsername: string;
  email: string;
  category: SlackPublicationCategory;
  message: string;
}
