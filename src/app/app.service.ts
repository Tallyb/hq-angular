import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

export interface ICoreConfig {
    isWeb?: boolean;
    isChrome?: boolean;
}

const CORECONFIG_CONSTANTS = new InjectionToken<any>('CoreConfigConstants');

@Injectable()
export class CoreConfig implements ICoreConfig{
  private configConstants: any = {};
  public isWeb = true;
  constructor(@Inject(PLATFORM_ID) private platformId, @Inject(CORECONFIG_CONSTANTS) config, protected swUpdate: SwUpdate) {
    this.configConstants = config;
  }
}
