import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    FormsModule
  ]
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 12, rows: 1 },
          { title: 'Card 2', cols: 12, rows: 1 },
          { title: 'Card 3', cols: 12, rows: 1 },
          { title: 'Card 4', cols: 12, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', id: 1, cols: 6, rows: 2 },
        { title: 'Card 2', id: 0, cols: 6, rows: 1 },
        { title: 'Card 3', id: 1, cols: 6, rows: 2 },
        { title: 'Card 4', id: 0, cols: 6, rows: 1 }
      ];
    })
  );
}
