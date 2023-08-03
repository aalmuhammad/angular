import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../services/api.service';
import { PopupComponent } from 'src/app/pages/actor/popup/popup.component';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  actors: any;
  dataAktor: any;
  displayedColumns = ['actor_id', 'first_name', 'last_name', 'action'];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService, private dialog: MatDialog, private snackBar: MatSnackBar ) {}

  ngOnInit() {
    this.getAllActors();
  }

  getAllActors() {
    this.apiService.getAllActor().subscribe(
      (data) => {
        this.actors = data;
        this.dataAktor = this.actors.data;

        this.dataSource = new MatTableDataSource<any>(this.dataAktor);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        console.log(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  openPopup(action: string, actorData?: any) {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '60%',
      height: '400px',
      data: {
        action: action,
        actorData: actorData,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.action === 'Add') {
          this.addActor(result.actorData);
        } else if (result.action === 'Edit') {
          this.editActor(result.actorData);
        } else if (result.action === 'Delete') {
          this.deleteActor(result.actorData.actor_id);
        }
      }
    });
  }

  addActor(actorData: any) {
    this.apiService.insertActor(actorData).subscribe(
      (response) => {
        console.log('Data added successfully: ', response);
        this.getAllActors();
        this.showSnackBar('Data added successfully');
      },
      (error) => {
        console.error('Error adding data: ', error);
        this.showSnackBar('Error adding data');
      }
    );
  }

  editActor(actorData: any) {
    this.apiService.updateActor(actorData).subscribe(
      (response) => {
        console.log('Data updated successfully: ', response);
        this.getAllActors();
        this.showSnackBar('Data updated successfully');
      },
      (error) => {
        console.error('Error updating data: ', error);
        this.showSnackBar('Error updating data');
      }
    );
  }

  deleteActor(actorId: number) {
    this.apiService.deleteActor(actorId).subscribe(
      (response) => {
        console.log('Data deleted successfully: ', response);
        this.getAllActors();
        this.showSnackBar('Data deleted successfully');
      },
      (error) => {
        console.error('Error deleting data: ', error);
        this.showSnackBar('Error deleting data');
      }
    );
  }

  applyFilter(event: any) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
