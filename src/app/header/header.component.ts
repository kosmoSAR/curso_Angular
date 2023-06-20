import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  public image:string="data:image/jpeg;base64,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";
  constructor(){}

  ngOnInit(): void {
  }

}
