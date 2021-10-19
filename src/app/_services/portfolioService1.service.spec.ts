/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortfolioService1Service } from './portfolioService1.service';

describe('Service: PortfolioService1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioService1Service]
    });
  });

  it('should ...', inject([PortfolioService1Service], (service: PortfolioService1Service) => {
    expect(service).toBeTruthy();
  }));
});
