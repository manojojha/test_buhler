import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MachineService } from '../../services/machine.service';
import { IMachine, IMachineState, MachineStateIcons } from '../../models/machine-state.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy{
  machines: IMachine[] = [];
  subscriptions: Subscription = new Subscription();
  state!: IMachineState

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
