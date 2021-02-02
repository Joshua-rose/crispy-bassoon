import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = {...selectedRecord};
  }
  onDelete(id:number, name?:string){
    if(confirm(`Are you sure you want to delete ${name? `the ${name}`: 'this'} record?`)){

      this.service.deletePaymentDetail(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toast.error("Deleted Successfully", "Payment Detail Register")
        },
        (err) => {
          console.error("Error Occured", err)
        }
        )
      }
  }

}
