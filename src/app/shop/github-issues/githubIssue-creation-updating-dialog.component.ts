import {Component, Inject} from "@angular/core";
import {GithubPublicationModel} from "../shared/models/github-publication.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {GithubPublicationService} from "../shared/services/github-publication.service";

@Component({

  templateUrl: 'githubIssue-creation-updating-dialog.component.html',
  styleUrls: ['githubIssue-dialog.component.css']
})
export class GitHubIssueDialogoComponent {

  title: string;
  searcAllmessage: String = "";
  isIssues: boolean = false;
  creado: boolean = false;

  constructor(
    @ Inject(MAT_DIALOG_DATA) public data: GithubPublicationModel,
    private gitHubIssueService: GithubPublicationService, private dialog: MatDialog) {
    this.title ='GitHub Issues';
    this.searchIssues();
  }

  ngOnInit() {
  }

  cancelar() {
    this.dialog.closeAll();
  }

  searchIssues(){
    this.isIssues = true;
    this.searcAllmessage = "List issues";
    this.gitHubIssueService
      .searchIssues()
      .subscribe(data => {
        this.isIssues = true;
        this.searcAllmessage = "Listado de issues";

      }, error => {
        this.creado = true;
        this.searcAllmessage = "error al buscar los issues";
      });
  }

}
