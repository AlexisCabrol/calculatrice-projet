import {Component, Input, OnInit} from '@angular/core';
import {OperationData} from '../models/operation.data';

@Component({
  selector: 'app-histo-cal',
  templateUrl: './histo-cal.component.html',
  styleUrls: ['./histo-cal.component.css']
})
export class HistoCalComponent implements OnInit {

  // Input qui fournit la liste d'historique des calcules
  @Input() listeCalcul: OperationData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
