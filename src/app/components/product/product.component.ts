import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  constructor(private activatedRoute:ActivatedRoute) {

    activatedRoute.paramMap.subscribe(resp =>{
      let selectedId = resp.get('id');
      console.log(selectedId)
    });


  }

  ngOnInit(): void {
  }

}
