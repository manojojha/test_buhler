import { Component, Input } from '@angular/core';
import { IMachine, MachineIcon, MachineStateIcons } from '../../models/machine-state.model';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent {
  @Input({required: true}) machine!: IMachine
  
  state = MachineStateIcons;
  machineIcon = MachineIcon;
}
