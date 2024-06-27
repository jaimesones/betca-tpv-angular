import { Component, OnInit } from '@angular/core';
import {GithubPublicationModel} from "../shared/models/github-publication.model";
import {MatDialog} from "@angular/material/dialog";
import {GithubPublicationService} from "../shared/services/github-publication.service";
import {GitHubIssueDialogoComponent} from "./githubIssue-creation-updating-dialog.component";
import {GitHubIssueCreateDialogoComponent} from "./githib-issues-creation-dialog";

@Component({
  selector: 'app-github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.css']
})
export class GithubIssuesComponent implements OnInit {

  githubPublicationModel : GithubPublicationModel;
 // createMessage: String = "";


  operaciones = [
    {valor:'bug', muestraValor:'Bug'},
    {valor:'enhancement', muestraValor:'Enhancement'}
  ];

  seleccionada: string = this.operaciones[0].valor;


  constructor(private dialog: MatDialog,private githubPublicationService: GithubPublicationService) {
    this.githubPublicationModel = new GithubPublicationModel();
  }

  ngOnInit(): void {
  }

  createIssue() {
    this.dialog.open(GitHubIssueCreateDialogoComponent);
  }

  getIssues() {
    this.dialog.open(GitHubIssueDialogoComponent);
  }
}
