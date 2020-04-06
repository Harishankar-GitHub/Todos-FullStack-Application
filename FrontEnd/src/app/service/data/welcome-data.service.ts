import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean
{
  constructor(public message: string)
  {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService()
  {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldServicePathVariable(name)
  {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();    //Commenting because it's hard coded. It is not needed.
    // let headers = new HttpHeaders                                              //Commenting because it's hard coded. It is not needed.
    // (
    //   {
    //     Authorization: basicAuthHeaderString                                   //Commenting because it's hard coded. It is not needed.
    //   }
    // )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, 
    // {headers}
    );                                                                            //Commenting because it's hard coded. It is not needed.
    // console.log("Execute Hello World Bean Service");
  }

  // createBasicAuthenticationHttpHeader()
  // {
  //   let username = 'Harissh';
  //   let password = 'Harish123';                                                //Commenting because it's hard coded. It is not needed.
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
