import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MachineService } from './machine.service';

describe('MachineService', () => {
  let service: MachineService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MachineService]
    });
    service = TestBed.inject(MachineService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch machines data', () => {
    const dummyMachines = [
      {
        name: 'Scale',
        state: 'Running'
      },
      {
        name: 'Bag Attach',
        state: 'Alarm'
      }
    ];

    service.getMachines().subscribe(machines => {
      expect(machines.length).toBe(2);
      expect(machines).toEqual(dummyMachines);
    });

    const req = httpMock.expectOne('assets/machines.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMachines);
  });
});
