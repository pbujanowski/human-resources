import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmDialogModel } from 'src/app/models';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  public readonly title: string;
  public readonly message: string;

  constructor(
    public readonly dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: ConfirmDialogModel,
    private readonly translate: TranslateService
  ) {
    this.title = data.title;
    this.message = data.message;
  }

  public onConfirm = () => this.dialogRef.close(true);

  public onDismiss = () => this.dialogRef.close(false);

  public getTranslate = (key: string) => this.translate.instant(key);
}
