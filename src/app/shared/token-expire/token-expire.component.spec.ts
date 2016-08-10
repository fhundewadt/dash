/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TokenExpireComponent, componentVersion } from './token-expire.component';

describe('Component: TokenExpire', () => {
  beforeEach(() => {
    addProviders([ TokenExpireComponent ])
  });

  it('should create an instance', () => {
    inject([ TokenExpireComponent ], ( component: TokenExpireComponent ) => {
      expect(component).toBeTruthy()
    });
  });

  it(`should have as version ${componentVersion}`,
    inject([ TokenExpireComponent ], ( component: TokenExpireComponent ) => {
      expect(component.tokenExpireVersion).toEqual('1.0a')
    }))
});
