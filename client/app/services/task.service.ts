/*
 * Template of a service
 */

import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {
	
	constructor(private http: Http) {
		// code...
	}
}