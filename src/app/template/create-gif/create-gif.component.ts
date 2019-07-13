import { Component, OnInit } from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-gif',
  templateUrl: './create-gif.component.html',
  styleUrls: ['./create-gif.component.scss']
})
export class CreateGifComponent implements OnInit {

  // icon
  faPaperPlane = faPaperPlane;

  // variavel form
  gifForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    // ************************ Drag and drop ***************** //
    let dropArea = document.getElementById("drop-area")

      // Prevent default drag behaviors
      ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
        document.body.addEventListener(eventName, preventDefaults, false)
      })

      // Highlight drop area when item is dragged over it
      ;['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
      })

      ;['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
      })

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false)

    function preventDefaults(e) {
      e.preventDefault()
      e.stopPropagation()
    }

    function highlight(e) {
      dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
      dropArea.classList.remove('active')
    }

    function handleDrop(e) {
      var dt = e.dataTransfer
      var files = dt.files

      handleFiles(files)
    }

    let uploadProgress = []
    let progressBar = document.getElementById('progress-bar')

    function initializeProgress(numFiles) {
      progressBar.value = 0
      uploadProgress = []

      for (let i = numFiles; i > 0; i--) {
        uploadProgress.push(0)
      }
    }

    function updateProgress(fileNumber, percent) {
      uploadProgress[fileNumber] = percent
      let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
      console.debug('update', fileNumber, percent, total)
      progressBar.value = total
    }

    function handleFiles(files) {
      files = [...files]
      initializeProgress(files.length)
      files.forEach(uploadFile)
      files.forEach(previewFile)
    }

    function previewFile(file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = function () {
        let img = document.createElement('img')
        img.src = reader.result;
        document.getElementById('gallery').appendChild(img)
      }
    }

    function uploadFile(file, i) {
      var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
      var xhr = new XMLHttpRequest()
      var formData = new FormData()
      xhr.open('POST', url, true)
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

      // Update progress (can be used to show progress indicator)
      xhr.upload.addEventListener("progress", function (e) {
        updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
      })

      xhr.addEventListener('readystatechange', function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          updateProgress(i, 100) // <- Add this
        }
        else if (xhr.readyState == 4 && xhr.status != 200) {
          // Error. Inform the user
        }
      })

      formData.append('upload_preset', 'ujpu6gyk')
      formData.append('file', file)
      xhr.send(formData)
    }
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
      ]
    });
  }

  onSubmit(data) {

  }

}
