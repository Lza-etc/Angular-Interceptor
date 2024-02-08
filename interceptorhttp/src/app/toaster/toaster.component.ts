import { Component, Input, OnInit } from '@angular/core';
import { Toast } from './toast';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class ToasterComponent implements OnInit {
  toast!: Toast | null;
  message!: string;

  constructor(private toasterService: ToasterService) {}

  ngOnInit() {
    this.toasterService.toasterState.subscribe((toast: any) => {
      this.toast = toast;
      setTimeout(() => {
        this.toast = null;
      }, 4000);
    });
  }
  public RemoveToaster() {
    this.toast = null;
  }
}
