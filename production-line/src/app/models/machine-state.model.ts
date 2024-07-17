
export interface IMachineState {
    [key: string]: string | undefined
}
export interface IMachine {
    name: string,
    state: string
}

export const MachineStateIcons: IMachineState = {
    Running: 'settings_backup_restore',
    Alarm: 'error_outline',
    Warning: 'warning'
}

export const MachineIcon: {
    [key: string]: string | undefined
} =  {
    Scale : 'open_in_browser',
    Attacher: 'call_to_action',
    Packer: 'chrome_reader_mode',
    Closer: 'grid_on'
}
