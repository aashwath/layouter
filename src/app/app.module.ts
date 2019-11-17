import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

// Angular Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

//App components
import { AppComponent } from "./app.component";
import { FlexContainerComponent } from "./flex-container/flex-container.component";
import { CssWidgetComponent } from "./css-widget/css-widget.component";
import { InfoPanelComponent } from './info-panel/info-panel.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    ],
  declarations: [
    AppComponent,
    FlexContainerComponent,
    CssWidgetComponent,
    InfoPanelComponent,
    ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
