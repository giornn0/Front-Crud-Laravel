import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatCommonModule,
  MatOptionModule,
  MatLineModule,
} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table'
@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  exports: [
    MatProgressSpinnerModule,
    MatSelectModule,
    MatExpansionModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCommonModule,
    MatBadgeModule,
    MatOptionModule,
    MatLineModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatListModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule
  ],
})
export class MaterialModule {}
