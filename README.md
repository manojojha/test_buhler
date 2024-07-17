# ProductionLine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

This Angular application displays the status of a production line for bagging products (rice, sugar, or wheat) into bags. The line consists of the following sections (machines):

1. Scale
2. Bag Attach
3. Packer
4. Bag Closer
   
Each machine in the line can have one of the following states during the running time:

1. Running
2. Alarm
3. Warning
   
The application shows the machines of the line in two places (navigation and overview) where the user can see the state of every section.

## Getting Started
## Prerequisites
Node.js
npm (Node Package Manager)
Angular CLI

## Installation
1. Clone the repository: git clone https://github.com/manojojha/test_buhler.git
2. Navigate to the project directory:
   cd production-line
4. Install the dependencies
   npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
