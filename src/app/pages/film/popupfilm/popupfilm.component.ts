import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popupfilm',
  templateUrl: './popupfilm.component.html',
  styleUrls: ['./popupfilm.component.css']
})
export class PopupComponent implements OnInit {
  filmForm: FormGroup;
  action!: string;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.filmForm = this.formBuilder.group({
      film_id: [0],
      title: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.action = this.data.action;
    if (this.action === 'Edit') {
      this.filmForm.patchValue(this.data.filmData);
    }
  }

  onSubmit() {
    if (this.filmForm.valid) {
      this.dialogRef.close({
        action: this.action,
        filmData: this.filmForm.value,
      });
    }
  }

  closePopup() {
    this.dialogRef.close();
  }

  deleteFilm() {
    this.dialogRef.close({
      action: 'Delete',
      filmData: this.data.filmData, 
    });
  }
}