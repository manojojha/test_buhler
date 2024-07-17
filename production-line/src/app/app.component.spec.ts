import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OverviewComponent } from './components/overview/overview.component';
import { IMachine } from './models/machine-state.model';
import { of } from 'rxjs';
import { MachineService } from './services/machine.service';

describe('AppComponent', () => {
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
  beforeEach(() => {
    machineServiceMock = jasmine.createSpyObj('MachineService', ['getMachines']);
    machineServiceMock.getMachines.and.returnValue(of(mockMachines));

    TestBed.configureTestingModule({
    declarations: [AppComponent,ToolbarComponent,NavigationComponent,OverviewComponent],
    providers: [
      { provide: MachineService, useValue: machineServiceMock }
    ]
  })
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
