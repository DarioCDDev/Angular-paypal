import { Component, Input, OnInit, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  @Input() amount: any;
  @Input() items: any

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log('ModalComponent');
  }

}
