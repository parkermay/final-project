import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PredictComponent } from './predict/predict.component';
import { EstimateService } from './services/estimate.service';

@NgModule({
    declarations: [
        AppComponent,
        PredictComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [EstimateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
