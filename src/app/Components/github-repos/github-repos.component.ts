import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit{

  @Input()
  githubRepos: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getUniqueLanguages(): string[] {
  const uniqueLanguages: string[] = [];
  this.githubRepos.forEach(repo => {
    if (repo.language && !uniqueLanguages.includes(repo.language)) {
      uniqueLanguages.push(repo.language);
    }
  });
  return uniqueLanguages;
}
getCurrentPageRepos(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.githubRepos.slice(startIndex, endIndex);
}

 onPageChange(pageNumber: number): void {
  this.currentPage = pageNumber;
 }

  getTotalPages(): number {
  return Math.ceil(this.githubRepos.length / this.itemsPerPage);
  }
  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  

}
