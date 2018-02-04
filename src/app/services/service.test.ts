import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    results = '';
    constructor(private http: HttpClient) {
    }
    ngOnInit(): void {
//        this.testGetWithObject();
//        this.testGet();
        this.myPost();

    }

    myPostWorks() {
        let apiKey = 'Z21yGPuLBytgNtKQl5grucbM1WukVEfh8sJjo3mQ022zB/JgoSswN3yNaOiu4tOMIJ5B5K1hYUMikRiP1Z2m5A==';

        const httpOptions = {
            headers: new HttpHeaders({
//                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Trace': 'true',
                'Ocp-Apim-Subscription-Key': '8dce00104ad743ff8574870671589bac'
            })
        };
        

        let serviceUrlFull = 'https://ussouthcentral.services.azureml.net/workspaces/3ada77bdf12a4bb3aad385165f1680cf/services/ab8f67e1e16e4fc496b512ae3af31dc8/execute?api-version=2.0&details=true';
        let serviceUrl = 'https://ussouthcentral.services.azureml.net';
        let newUrl = 'https://pmay-final-apim.azure-api.net/final-project/estimate';
        const req = this.http.post(newUrl, {
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
          }, httpOptions)
          .subscribe(data => {
            console.log(data);
        });
    }

    myPost2() {
        let apiKey = 'Z21yGPuLBytgNtKQl5grucbM1WukVEfh8sJjo3mQ022zB/JgoSswN3yNaOiu4tOMIJ5B5K1hYUMikRiP1Z2m5A==';

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            })
        };
        

        let serviceUrlFull = 'https://ussouthcentral.services.azureml.net/workspaces/3ada77bdf12a4bb3aad385165f1680cf/services/ab8f67e1e16e4fc496b512ae3af31dc8/execute?api-version=2.0&details=true';
        let serviceUrl = 'https://ussouthcentral.services.azureml.net';
        const req = this.http.post(serviceUrlFull, {
            title: 'foo',
            body: 'bar',
            userId: 1
        }, httpOptions)
            .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
            );
    }

    testPost() {
        let httpUrl = 'http://jsonplaceholder.typicode.com/posts';
        let httpsUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        const req = this.http.post(httpUrl, {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
            .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
            );
    }

    testGet() {
        this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
            console.log(data);
        });
    }

    testGetWithObject() {
        // this.http.get('https://dog.ceo/api/breeds/list/all').subscribe(data => {
        //     console.log(data);
        // });
        this.http.get<Response>('https://dog.ceo/api/breeds/list/all').subscribe(data => {
            console.log(data.message.bulldog[1]);
        });
    }

    testAzureGet() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Trace': 'true',
                'Ocp-Apim-Subscription-Key': '8dce00104ad743ff8574870671589bac'
            })
        };
        
        this.http.get('https://pmay-final-apim.azure-api.net/echo/resource?param1=sample', httpOptions).subscribe(data => {
            console.log(data);
        });
    }

    testAzurePost() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
                'Ocp-Apim-Trace': 'true',
                'Ocp-Apim-Subscription-Key': '8dce00104ad743ff8574870671589bac'
            })
        };
        
//        this.http.post('https://pmay-final-apim.azure-api.net/echo/resource',
        this.http.post('https://pmay-final-apim.azure-api.net/final-project/resource',
        {
            "vehicleType": "train",
            "maxSpeed": 125,
            "avgSpeed": 90,
            "speedUnit": "mph"
                },
         httpOptions).subscribe(data => {
            console.log(data);
        });
    }


    myPost() {
        let apiKey = 'Z21yGPuLBytgNtKQl5grucbM1WukVEfh8sJjo3mQ022zB/JgoSswN3yNaOiu4tOMIJ5B5K1hYUMikRiP1Z2m5A==';

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Trace': 'true',
                'Ocp-Apim-Subscription-Key': '8dce00104ad743ff8574870671589bac'
            })
        };
        

        let serviceUrlFull = 'https://ussouthcentral.services.azureml.net/workspaces/3ada77bdf12a4bb3aad385165f1680cf/services/ab8f67e1e16e4fc496b512ae3af31dc8/execute?api-version=2.0&details=true';
        let serviceUrl = 'https://ussouthcentral.services.azureml.net';
        let newUrl = 'https://pmay-final-apim.azure-api.net/final-project/estimate';
        const req = this.http.post<Estimate>(newUrl, {
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
          }, httpOptions)
          .subscribe(data => {
            console.log(data.Results.output1.value.Values[0][3]);
        });
    }
}

interface Response {
    status: string,
    message: {
        bulldog: Array<string>
    }
}

interface EstimateValues {

}

interface Estimate {
    Results: {
        output1: {
            value: {
                Values: Array<Array<string>>
            }
        }
    }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
// }
