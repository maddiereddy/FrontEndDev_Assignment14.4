import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Product } from '../product';

import 'rxjs/add/operator/toPromise';

/*********************************************************************************
  1. Used `https://angular.io/docs/ts/latest/tutorial/toh-pt6.html` as reference
  2. Since I did not have a web server like express (to do save and delete operations),
  I simulated a mock in-memory server using the in-memory web API. Only to be used
  in development stage! Since it is in-memory, data is not actually saved and will be
  lost each time you re-run the app.
  3. Used Promises
  4. After data is retrieved in the get operation, data object array is sorted
  and then sent to calling component
  5. Have implemented all CRUD operations
 *********************************************************************************/

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private prodUrl = 'api/products';  // URL to web api

  constructor(private http: Http) { }

  //retrieve all products
  getProducts(): Promise<Product[]> {
    return this.http.get(this.prodUrl)
      .toPromise()
      .then(response => response.json().data.sort((a,b) => a.id - b.id) as Product[]) //sorting the array of data objects
      .catch(this.handleError);
  }

  //retrieve product by id
  getProduct(id: number): Promise<Product> {
    const url = `${this.prodUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  //update selected product by id
  update(product: Product): Promise<Product> {
    const url = `${this.prodUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  //create a new product object and save
  create(product: Product): Promise<Product> {
    return this.http
      .post(this.prodUrl, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  //delete selected product by id
  delete(product: Product): Promise<void> {
    const url = `${this.prodUrl}/${product.id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  //error handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
