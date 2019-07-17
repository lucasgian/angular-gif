import { Component, OnInit } from '@angular/core';

import { faCloudUploadAlt  } from '@fortawesome/free-solid-svg-icons';
import { faPlus  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCloudUploadAlt = faCloudUploadAlt;
  faPlus = faPlus;
  constructor() { }

  ngOnInit() {
  }

}
