import { Component, OnInit } from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

// variavel global
import { info } from '../../../environments/info';

@Component({
  selector: 'app-create-gif',
  templateUrl: './create-gif.component.html',
  styleUrls: ['./create-gif.component.scss']
})
export class CreateGifComponent implements OnInit {

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
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.buildForm();

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
      viewPrivate: [false, Validators.required],
      // caso seja privado
      key: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])
      ],
      initVideo: [0, Validators.required],
      cutVideo: [0, Validators.required]
    });
  }

  onSubmit(data) {

    console.log(data);
    if (this.selectedFile !== null && this.selectedFile !== undefined) { //gif é o obrigatorio
      data.file = this.imgURL;

      this.http.post(info.api + 'v1/files/create/gifs', data).subscribe(
        response => {
          console.log(' Cadastro completo com sucesso! ', response);
          let auxResponse: any = response;
          this.accessLink = info.url + 'your/' + auxResponse.link;
        },
        err => {
          console.log('Error occured: ', err);
        }
      );

    } else {
    }
  }



  // Função de pré visualizar as imagens selecionadas
  preview(files) {
    this.message = '';
    if (files.length === 0) {
      this.imgURL = null;
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

  publicV() {
    this.gifForm.value.visibility = true;
  }

  currentTime: number;

  setCurrentTime(data) {
    //this.currentTime = data.target.currentTime;
    this.gifForm.value.cutVideo = data.target.duration;
    console.log(data.target.duration);
  }

}
