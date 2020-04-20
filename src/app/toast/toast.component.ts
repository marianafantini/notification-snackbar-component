import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let snackBarRef = this.snackBar.open('Message archived', 'teste');
    console.log("done")
  }

}
