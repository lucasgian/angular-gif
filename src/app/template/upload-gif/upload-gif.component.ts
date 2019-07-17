import { Component, OnInit } from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MzToastService } from 'ngx-materialize';

// variavel global
import { info } from '../../../environments/info';

@Component({
  selector: 'app-upload-gif',
  templateUrl: './upload-gif.component.html',
  styleUrls: ['./upload-gif.component.scss']
})
export class UploadGifComponent implements OnInit {

  // variaveis de manipulação das imagens
  imgURL: any;
  message: string;
  selectedFile: File = null;
  imagePath;

  // icon
  faPaperPlane = faPaperPlane;

  // variavel form
  gifForm: FormGroup;

  // variavel de carregamento
  loading: boolean = false;

  // variavel para o link de compartilhamento da gif
  accessLink: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  showToast() {
    this.toastService.show('Gif compartilhada com sucesso :)', 5000, 'green');
  }

  errorToast() {
    this.toastService.show('Puts, tenta de novo :(', 5000, 'red');
  }


  // messagem de erro
  errorMessageResources = {
    key: {
      required: 'A chave de compartilhamento é necessária',
      minlength: 'Sua chave deve conter pelo menos 4 caracteres',
      maxlength: 'Não pode ser maior que 32 caracteres',
    }
  };

  // instância do form
  buildForm() {
    this.gifForm = this.formBuilder.group({
      // Tipo de visualização definida, entre pública geral, ou privada restrita
      visibility: [true, Validators.required],
      // caso seja privado
      key: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])
      ],
      dateLimit: ['', Validators.required]
    });
  }

  initLoad() {
    window.scrollTo(0, 0);
    this.loading = true;
    $(document).ready(function () {
      $("body").css("background-color", 'rgba(10,23,55,0.5)');
    });
  }

  endLoad() {
    this.loading = false;
    $(document).ready(function () {
      $("body").css("background-color", 'rgba(255, 255, 255, 1)');
    });
  }

  onSubmit(data) {

    this.initLoad();

    console.log(data);
    if (this.selectedFile !== null && this.selectedFile !== undefined) { //gif é o obrigatorio
      data.file = this.imgURL;

      this.http.post(info.api + '/v1/files/gifs', data).subscribe(
        response => {
          console.log(' Cadastro completo com sucesso! ', response);
          let auxResponse: any = response;
          this.accessLink = info.url + '/your/' + auxResponse.link;
          this.endLoad();
          this.showToast();
        },
        err => {
          console.log('Error occured: ', err);
          this.endLoad();
          this.errorToast();
        }
      );

    } else {
      this.errorToast();
    }
  }


  cancelKey() {
    this.gifForm.value.key = '';
  }
  confirmKey() {
    this.gifForm.value.visibility = false;
  }


  // Função de pré visualizar as imagens selecionadas
  preview(files) {
    this.message = '';
    if (files.length === 0) {
      this.imgURL = null;
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.selectedFile = null;
      this.message = 'Apenas imagens são suportadas.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }

  // Função para pegar a imagem selecionado
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

}
