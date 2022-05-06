import { Component, Input,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-inspection-type',
  templateUrl: './add-inspection-type.component.html',
  styleUrls: ['./add-inspection-type.component.css']
})
export class AddInspectionTypeComponent implements OnInit {

  constructor(private service:InspectionApiService) { }

  @Input() inspectionType:any;
  inspectioName:string = "";

  ngOnInit(): void {
    this.inspectioName = this.inspectionType.inspectioName;
  }

  addInspectionType(){
    var inspectionType = {
      inspectioName:this.inspectioName
    }
    this.service.addInspectionTypes(inspectionType).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close')
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showAddSuccess = document.getElementById('add-inspectionType-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none"
        }
      },4000);
    });
  }
}
