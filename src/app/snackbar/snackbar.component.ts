import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  @Input() snackbarMessage: string = "Message here";
  @Input() snackbarAction: string = "Action";
  @Input() snackbarHorizontalPosition: MatSnackBarHorizontalPosition = "right";
  @Input() snackbarVerticalPosition: MatSnackBarVerticalPosition = "bottom";
  @Output() actionClicked: EventEmitter<any> = new EventEmitter();

  snackbarConfig: MatSnackBarConfig = {
    horizontalPosition: this.snackbarHorizontalPosition,
    verticalPosition: this.snackbarVerticalPosition,
  };

  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.openSnackbar();
  }

  openSnackbar(): void {
    let snackbarRef = this.snackbar.open(
      this.snackbarMessage,
      this.snackbarAction,
      this.snackbarConfig
    );

    snackbarRef.onAction().subscribe(() => {
      console.log("action happened");
      this.actionClicked.emit(true);
    });
    
  }

}
