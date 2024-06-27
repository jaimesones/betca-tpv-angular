import {Injectable} from "@angular/core";
import {EMPTY, Observable, of} from "rxjs";
import {GithubPublicationModel} from "../models/github-publication.model";

@Injectable({ providedIn: 'root' })
export class GithubPublicationService{

  createIssue(): Observable<string[]> {
    return of(["Creado"]);
  }
  searchIssues() {
    return of(["Search issues OK"]);
  }
}
