import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// variavel global
import { info } from '../../../environments/info';

@Component({
  selector: 'app-to-share',
  templateUrl: './to-share.component.html',
  styleUrls: ['./to-share.component.scss']
})
export class ToShareComponent implements OnInit {

  imgURL: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}


  ngOnInit() {
    this.searchGif( this.route.snapshot.paramMap.get('link') );
  }

  searchGif(link) {
    this.http.get(info.api + '/v1/files/gifs/search/' + link).subscribe(
      response => {
        console.log(' Cadastro completo com sucesso! ', response);
        
        this.imgURL = response;
      },
      err => {
        console.log('Error occured: ', err);
      }
    );

  }

}
