import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText = '';
  dataArray =[] =[
    'java',
    'php',
    'php',
    'Ruby',
    'javaScript',
    'c++',
    'C',
    'C#',
    'kotlin',
    'React',
    'Angular',

  ];
  filteredList:any =[]

  search(text:any) {
    this.filteredList=[];
    this.searchText=text;
    for (const temp of this.dataArray) {
      if ( temp.toLowerCase().includes(this.searchText.toLowerCase()) ){
          this.filteredList.push(temp);
      }
    }

  }
  // search(text: string) {
  //   this.searchText = text;
  //   this.filteredList = this.dataArray.filter(temp => temp.includes(this.searchText));
  // }

}
