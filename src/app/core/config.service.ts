import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  apiUrl = 'http://www.starwars-api.com/api/';
  delay = 500;

  constructor() { }
}
