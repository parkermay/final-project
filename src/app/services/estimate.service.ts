import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Estimate } from '../models/estimate.model';

@Injectable()
export class EstimateService {
//    azureMlUrl = 'xxxx';
    apiMgmtUrl = 'xxxx';
    apiMachineLearningKey = 'xxxx';
    apiMgmtKey = 'xxxx';

    constructor(private http: HttpClient) { }

    calculateEstimate(province: string, variety: string, price: number): Observable<Estimate> {
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
                  "province",
                  "variety",
                  "price",
                  "points"
                ],
                "Values": [
                  [
                    province,
                    variety,
                    price,
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

