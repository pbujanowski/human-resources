import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { AppEvent, AppEventService } from 'src/app/app-event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dataSource = new MatTableDataSource<AppEvent>();

  public readonly displayedColumns = ['name', 'occurrenceDate'];

  public isLoading = false;

  public readonly getRecentAppEvents = () => {
    try {
      this.isLoading = true;
      this.appEventService.getAllAppEvents().subscribe({
        next: (res: AppEvent[]) => (this.dataSource.data = [...res]),
        error: () =>
          this.showMessage(
            this.getTranslate(
              'models.appEvent.error.failedToLoadListOfRecentAppEvents'
            )
          ),
      });
    } finally {
      this.isLoading = false;
    }
  };

  public readonly onRefreshListClick = () => this.getRecentAppEvents();

  public readonly getTranslate = (key: string) => this.translate.instant(key);

  public readonly getModelTranslate = (key: string) =>
    this.getTranslate(`models.appEvent.${key}`);

  private readonly showMessage = (message: string) => {
    this.snackBar.open(message, this.getTranslate('common.ok'), {
      duration: 3000,
    });
  };

  constructor(
    private readonly appEventService: AppEventService,
    private readonly translate: TranslateService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getRecentAppEvents();
  }
}
