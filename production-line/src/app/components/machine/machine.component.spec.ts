import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineComponent } from './machine.component';
import { MachineStateIcons,IMachine,MachineIcon  } from '../../models/machine-state.model';
describe('MachineComponent', () => {
  let component: MachineComponent;
  let fixture: ComponentFixture<MachineComponent>;

  const mockMachine: IMachine = {
    name: 'Scale',
    state: 'Running'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineComponent);
    component = fixture.componentInstance;
    component.machine = mockMachine;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize input properties correctly', () => {
    expect(component.machine).toEqual(mockMachine);
    expect(component.state).toEqual(MachineStateIcons);
    expect(component.machineIcon).toEqual(MachineIcon);
  });
});
