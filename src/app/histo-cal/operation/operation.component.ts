import {Component, Input, OnInit} from '@angular/core';
import {OperationData} from '../../models/operation.data';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  // Input représentant un calcul
  @Input() operation: OperationData;

  constructor() { }

  ngOnInit(): void {
  }

}
