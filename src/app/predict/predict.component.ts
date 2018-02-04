import { Component, OnInit } from '@angular/core';

import { EstimateService } from '../services/estimate.service';

@Component({
    selector: 'app-predict',
    templateUrl: './predict.component.html',
    styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {
    procedureName: string;
    hospitalRegion: string;
    estTotalPayment: number = 0;

    constructor(private estimateService: EstimateService) { }

    ngOnInit() {
    }

    requestEstimate() {
        // this.estimateService.calculateEstimate(this.procedureName, this.hospitalRegion)
        // .subscribe(estTotalPayment => this.estTotalPayment = estTotalPayment);

        //        this.estTotalPayment = this.estimateService.calculateEstimate(this.procedureName, this.hospitalRegion);

        this.estimateService.calculateEstimate(this.procedureName, this.hospitalRegion)
            .then(messages => {
                console.log('in then clause');

            }).catch(error => console.error("Error calling estimateService.calculateEstimate: " + error.message));

    }

}
