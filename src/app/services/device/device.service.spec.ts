import { TestBed, async } from '@angular/core/testing';

import { DeviceService } from './device.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeviceService', () => {

    let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

    beforeEach(async(() => {
        statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
        splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
        platformReadySpy = Promise.resolve();
        platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            HttpClientTestingModule
          ]
        });
      }));

  it('Crear componente', () => {
    const service: DeviceService = TestBed.get(DeviceService);
    expect(service).toBeTruthy();
  });

  it('Obtener todos los datos', () => {
    const service: DeviceService = TestBed.get(DeviceService);
    service.getAllData().subscribe(res => {
        expect(Object.keys(res).length).toBeGreaterThanOrEqual(0);
    } , err => {
        fail(err);
    });
  });

  it('Obtener un dato dado su id', () => {
    const service: DeviceService = TestBed.get(DeviceService);
    service.getByID('ID_AS5').subscribe(res => {
        expect(Object.keys(res).length).toBeGreaterThanOrEqual(0);
    } , err => {
        fail(err);
    });
  });

});