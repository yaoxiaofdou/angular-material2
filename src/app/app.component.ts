import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  selectedOption: string;

  constructor(public dialog: MdDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog,{
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}