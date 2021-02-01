import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss']
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toast: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm) {
    this.service.postPaymentDetail().subscribe(
      (respond) => {
        console.log(respond);
        this.resetForm(form);
        this.toast.success('Submited successfully','Payment Detail Register')
      },
      (error) => {
        console.error('Error occured', error);
      }
    )
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
