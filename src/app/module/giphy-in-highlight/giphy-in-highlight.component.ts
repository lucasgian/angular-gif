import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// variavel global
import { info } from '../../../environments/info';

@Component({
  selector: 'app-giphy-in-highlight',
  templateUrl: './giphy-in-highlight.component.html',
  styleUrls: ['./giphy-in-highlight.component.scss']
})
export class GiphyInHighlightComponent implements OnInit {

  gifs: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchAll();
  }

  searchAll() {
    this.http.get(info.api + 'v1/files/gifs').subscribe(
      response => {
        console.log(' Busca completo com sucesso! ');

        this.gifs = response;
        
      },
      err => {
        console.log('Error occured: ', err);
      }
    );
  }

}
