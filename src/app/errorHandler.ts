import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

export class errorHandler {
  static errorHandle(error: Response | any){
    let errorMessage: String;

    if (error instanceof Response) {
      errorMessage = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText}`;
    }
    else {
      errorMessage = error.toString();
    }
    return Observable.throw(errorMessage)
  };
}
