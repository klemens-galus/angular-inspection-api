import { Component, Input,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  statusList$! : Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  constructor(private service:InspectionApiService) { }

  @Input() inspection:any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  inspectionTypeId!: number;

  ngOnInit(): void {
    this.id=this.inspection.id;
    this.status=this.inspection.staus;
    this.comments=this.inspection.comments;
    this.inspectionTypeId=this.inspection.iinspectionTypeIdd;
    this.statusList$ = this.service.getStatus();
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();

  }
}
