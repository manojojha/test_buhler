import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMachine, IMachineState, MachineStateIcons } from '../../models/machine-state.model';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  state!:IMachineState;
  subscriptions: Subscription = new Subscription();
  machines!: IMachine[];
  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.state = MachineStateIcons;
    this.subscriptions.add(this.machineService.getMachines().subscribe(data => {
      this.machines = data;
    }));
  }

  ngOnDestroy(): void {
    // Disposes the resources held by the subscription.
    this.subscriptions.unsubscribe();
  }
}
