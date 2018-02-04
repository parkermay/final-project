import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Estimate } from '../models/estimate.model';

@Injectable()
export class EstimateService {
//    azureMlUrl = 'https://ussouthcentral.services.azureml.net/workspaces/3ada77bdf12a4bb3aad385165f1680cf/services/ab8f67e1e16e4fc496b512ae3af31dc8/execute?api-version=2.0&details=true';
    apiMgmtUrl = 'https://pmay-final-apim.azure-api.net/final-project/estimate';
    apiMachineLearningKey = 'Z21yGPuLBytgNtKQl5grucbM1WukVEfh8sJjo3mQ022zB/JgoSswN3yNaOiu4tOMIJ5B5K1hYUMikRiP1Z2m5A==';
    apiMgmtKey = '8dce00104ad743ff8574870671589bac';

    constructor(private http: HttpClient) { }

    calculateEstimate(procedureName: string, hospitalRegion: string): Observable<Estimate> {
        console.log(' procedureName = ' + procedureName);
        console.log(' hospitalRegion = ' + hospitalRegion);
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.apiMachineLearningKey,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Trace': 'true',
                'Ocp-Apim-Subscription-Key': this.apiMgmtKey
            })
        };

        let body = {
            "Inputs": {
              "input1": {
                "ColumnNames": [
                  "drg_definition",
                  "hospital_region",
                  "avg_total_payments"
                ],
                "Values": [
                  [
                    procedureName,
                    hospitalRegion,
                    0
                  ]
                ]
              }
            },
            "GlobalParameters": {
              "Account key": this.apiMachineLearningKey
            }
        };

        return this.http.post<Estimate>(this.apiMgmtUrl, body, httpOptions);
    }
}

