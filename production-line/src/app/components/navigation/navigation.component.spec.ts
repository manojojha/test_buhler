import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MachineService } from '../../services/machine.service';
import { NavigationComponent } from './navigation.component';
import { MachineStateIcons, IMachine } from '../../models/machine-state.model';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let machineServiceMock: any;

  const mockMachines: IMachine[] = [
    {
      name: 'Scale',
      state: 'Running',
    },
    {
      name: 'Attacher',
      state: 'Alarm',
    }
  ];

  beforeEach(async () => {
    machineServiceMock = jasmine.createSpyObj('MachineService', ['getMachines']);
    machineServiceMock.getMachines.and.returnValue(of(mockMachines));

    await TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      providers: [
        { provide: MachineService, useValue: machineServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize machines and state on init', () => {
    expect(component.machines).toEqual(mockMachines);
    expect(component.state).toEqual(MachineStateIcons);
    expect(machineServiceMock.getMachines).toHaveBeenCalled();
  });

  it('should clean up subscriptions on destroy', () => {
    spyOn(component.subscriptions, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscriptions.unsubscribe).toHaveBeenCalled();
  });
});
