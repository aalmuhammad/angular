import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  actorForm: FormGroup;
  action!: string;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.actorForm = this.formBuilder.group({
      actor_id: [0],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.action = this.data.action;
    if (this.action === 'Edit') {
      this.actorForm.patchValue(this.data.actorData);
    }
  }

  onSubmit() {
    if (this.actorForm.valid) {
      this.dialogRef.close({
        action: this.action,
        actorData: this.actorForm.value,
      });
    }
  }

  closePopup() {
    this.dialogRef.close();
  }

  deleteActor() {
    this.dialogRef.close({
      action: 'Delete',
      actorData: this.data.actorData, 
    });
  }
}
