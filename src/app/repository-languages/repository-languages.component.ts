import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repository-languages',
  templateUrl: './repository-languages.component.html',
  styleUrls: ['./repository-languages.component.css']
})
export class RepositoryLanguagesComponent implements OnInit {
  repositoryOwner: string = 'octocat'; // Replace with your GitHub username
  repositoryName: string = 'hello-world'; // Replace with the name of your GitHub repository
  languages: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRepositoryLanguages();
  }

  fetchRepositoryLanguages(): void {
    const url = `https://api.github.com/repos/${this.repositoryOwner}/${this.repositoryName}/languages`;
    this.http.get<any>(url).subscribe(
      (data) => {
        this.languages = data;
      },
      (error) => {
        console.error('Error fetching repository languages:', error);
      }
    );
  }
}
