import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MzToastService } from 'ngx-materialize';

// variavel global
import { info } from '../../../environments/info';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-to-share',
  templateUrl: './to-share.component.html',
  styleUrls: ['./to-share.component.scss']
})
export class ToShareComponent implements OnInit {
  // image
  imgURL;

  // Object image
  objectGif: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private toastService: MzToastService
  ) { }

  //Call this method in the image source, it will sanitize it.
  transform(base64) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64);
  }

  ngOnInit() {

    $(document).ready(function(){
      $('.modal').modal();
    });

    this.searchGif(this.route.snapshot.paramMap.get('link'));
    
  }

  // mesagem de informação
  showToast(message, color) {
    this.toastService.show(message, 5000, color);
  }

  /** Busca gif usando o link compartilhado.
   *  @param string, recebe o link unico de compartilhamento.
   */
  searchGif(link) {
    this.http.get(info.api + 'v1/files/gifs/search/' + link).subscribe(
      response => {
        console.log(' Busca completo com sucesso! ');

        this.objectGif = response;
        if ( this.objectGif == null ) { // verefica se existe essa gif
          this.showToast('Não existe esse link :(', 'red');
        }
        else if ( this.objectGif.hasOwnProperty('message') ) { // verifica a se o link venceu a data limit
          this.showToast('Esse link está vencido! Sorry (--)', 'yellow');
        }
        else if ( this.objectGif.file_visibility ) { // verifica se se é link público ou não
          this.imgURL = this.transform(this.objectGif.file_original_still);
        } else { // caso o link seja privado
          $(document).ready(function(){
            $("#btn-access-file").click();
          });
        }
        
      },
      err => {
        console.log('Error occured: ', err);
      }
    );
  }
  
  /** Valida a chave inserida
   *  É validado acada caractere adicionado
   */
  validKey(event: any) {
    
    const inputChar = String.fromCharCode(event.charCode);
    let textKeyPress: any = document.getElementById("key-access");

    if ( (textKeyPress.value + inputChar) == this.objectGif.file_key ) {
      this.imgURL = this.transform(this.objectGif.file_original_still);
    }

  }

}
