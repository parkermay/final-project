import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EstimateService {
    serviceUrl = 'https://ussouthcentral.services.azureml.net/workspaces/3ada77bdf12a4bb3aad385165f1680cf/services/ab8f67e1e16e4fc496b512ae3af31dc8/execute?api-version=2.0&details=true';
    apiKey = 'Z21yGPuLBytgNtKQl5grucbM1WukVEfh8sJjo3mQ022zB/JgoSswN3yNaOiu4tOMIJ5B5K1hYUMikRiP1Z2m5A==';

    constructor(private http: HttpClient) { }

    calculateEstimate(procedureName: string, hospitalRegion: string): Promise<number> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.apiKey,
                'Content-Type': 'application/json'
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
                    "039 - EXTRACRANIAL PROCEDURES W/O CC/MCC",
                    "AL - Birmingham",
                    0
                  ]
                ]
              }
            },
            "GlobalParameters": {
              "Account key": "Z21yGPuLBytgNtKQl5grucbM1WukVEfh8sJjo3mQ022zB/JgoSswN3yNaOiu4tOMIJ5B5K1hYUMikRiP1Z2m5A=="
            }
        };

//        return of(1200.25);
//        let x: Observable<number> = 
        return         this.http.post<number>(this.serviceUrl, body, httpOptions)
        .toPromise()
        .catch(error => this.handleError(error));
//        return of(1200.25);
}

private handleError(error: any): Promise<any> {
    console.error('Exception:', error.error);
    return Promise.reject(error);
}

}
