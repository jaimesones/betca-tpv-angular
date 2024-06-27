import {Component, Inject} from "@angular/core";
import {GithubPublicationModel} from "../shared/models/github-publication.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {GithubPublicationService} from "../shared/services/github-publication.service";

@Component({

  templateUrl: 'githib-issues-creation-dialog.html',
  styleUrls: ['githubIssue-dialog.component.css']
})
export class GitHubIssueCreateDialogoComponent {

  title: string;
  createMessage: String = "";
  isCreate: boolean = false;


  constructor(
    @ Inject(MAT_DIALOG_DATA) public data: GithubPublicationModel,
    private githubPublicationService: GithubPublicationService, private dialog: MatDialog) {
    this.title = 'Create GitHub Issues';
    this.createIssue();
  }

  ngOnInit() {
  }

  cancelar() {
    this.dialog.closeAll();
  }

  createIssue() {

    this.isCreate = true;
    this.createMessage = "Issue created";

    this.githubPublicationService
      .createIssue()//this.githubPublicationModel
      .subscribe(data => {
        this.isCreate = true;
        this.createMessage = "enviado";
      }, error => {
        this.createMessage = "error al crear el issue";
      });
  }
}
