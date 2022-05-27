import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sv4Data = ELEMENT_DATA
  sv12Data = ELEMENT_DATA
  gooseData = MOCK_GOOSE

  constructor() { }

  getSv4Data(): Observable<PeriodicElement[]> {
    return of(this.sv4Data)
  }
  getSv12Data(): Observable<PeriodicElement[]> {
    return of(this.sv12Data)
  }
  getGooseData(): Observable<MockGoose[]> {
    return of(this.gooseData)
  }
}

const DATA: Element[] = [
  {name: 'Ia1', value: 1, angle: -90, freq: 50, value2: 0, col: '°'},
  {name: 'Ib1', value: 1, angle: 90, freq: 50, value2: 0, col: '°'},
  {name: 'Ic1', value: 1, angle: 90+90, freq: 50, value2: 0, col: '°'},
  {name: 'Iz1', value: 1, angle: 0, freq: 50, value2: 0, col: '°'},
  {name: 'Ua1', value: 57.74, angle: 0, freq: 50, value2: 0, col: '°'},
  {name: 'Ub1', value: 57.74, angle: -120, freq: 50, value2: 0, col: '°'},
  {name: 'Uc1', value: 57.74, angle: 120, freq: 50, value2: 0, col: '°'},
  {name: 'Uz1', value: 57.74, angle: 0, freq: 50, value2: 0, col: '°'},
];
const DATA2: Element[] = [
  {name: 'Ia1', value: 2, angle: 0, freq: 50, value2: 0, col: '°'},
  {name: 'Ib1', value: 2, angle: 90, freq: 50, value2: 0, col: '°'},
  {name: 'Ic1', value: 2, angle: 180, freq: 50, value2: 0, col: '°'},
  {name: 'Iz1', value: 2, angle: 0, freq: 50, value2: 0, col: '°'},
  {name: 'Ua1', value: 57.00, angle: 300, freq: 50, value2: 0, col: '°'},
  {name: 'Ub1', value: 57.00, angle: -100, freq: 50, value2: 0, col: '°'},
  {name: 'Uc1', value: 57.00, angle: 100, freq: 50, value2: 0, col: '°'},
  {name: 'Uz1', value: 57.00, angle: 0, freq: 50, value2: 0, col: '°'},
];

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 0, svID: 'Hydrogen', appID: 1.0079, macDestination: 'H', data: DATA},
  {id: 1, svID: 'Helium', appID: 4.0026, macDestination: 'He', data: DATA2},
  {id: 2, svID: 'Lithium', appID: 6.941, macDestination: 'Li', data:  DATA},
  {id: 3, svID: 'Beryllium', appID: 9.0122, macDestination: 'Be', data:  DATA},
  {id: 4, svID: 'Boron', appID: 10.811, macDestination: 'B', data:  DATA},
  {id: 5, svID: 'Carbon', appID: 12.0107, macDestination: 'C', data:  DATA},
  {id: 6, svID: 'Nitrogen', appID: 14.0067, macDestination: 'N', data:  DATA},
  {id: 7, svID: 'Oxygen', appID: 15.9994, macDestination: 'O', data:  DATA},
  {id: 8, svID: 'Fluorine', appID: 18.9984, macDestination: 'F', data:  DATA},
  {id: 9, svID: 'Neon', appID: 20.1797, macDestination: 'Ne', data:  DATA},
  {id: 10, svID: 'Hydrogen', appID: 1.0079, macDestination: 'H', data:  DATA},
  {id: 11, svID: 'Helium', appID: 4.0026, macDestination: 'He', data:  DATA},
  {id: 12, svID: 'Lithium', appID: 6.941, macDestination: 'Li', data:  DATA},
  {id: 13, svID: 'Beryllium', appID: 9.0122, macDestination: 'Be', data:  DATA},
  {id: 14, svID: 'Boron', appID: 10.811, macDestination: 'B', data:  DATA},
  {id: 15, svID: 'Carbon', appID: 12.0107, macDestination: 'C', data:  DATA},
  {id: 16, svID: 'Nitrogen', appID: 14.0067, macDestination: 'N', data:  DATA},
  {id: 17, svID: 'Oxygen', appID: 15.9994, macDestination: 'O', data:  DATA},
  {id: 18, svID: 'Fluorine', appID: 18.9984, macDestination: 'F', data:  DATA},
  {id: 19, svID: 'Neon', appID: 20.1797, macDestination: 'Ne', data:  DATA},
  {id: 20, svID: 'Hydrogen', appID: 1.0079, macDestination: 'H', data:  DATA},
  {id: 21, svID: 'Helium', appID: 4.0026, macDestination: 'He', data:  DATA},
  {id: 22, svID: 'Lithium', appID: 6.941, macDestination: 'Li', data:  DATA},
  {id: 23, svID: 'Beryllium', appID: 9.0122, macDestination: 'Be', data:  DATA},
  {id: 24, svID: 'Boron', appID: 10.811, macDestination: 'B', data:  DATA},
  {id: 25, svID: 'Carbon', appID: 12.0107, macDestination: 'C', data:  DATA},
  {id: 26, svID: 'Nitrogen', appID: 14.0067, macDestination: 'N', data:  DATA},
  {id: 27, svID: 'Oxygen', appID: 15.9994, macDestination: 'O', data:  DATA},
  {id: 28, svID: 'Fluorine', appID: 18.9984, macDestination: 'F', data:  DATA},
  {id: 29, svID: 'Neon', appID: 20.1797, macDestination: 'Ne', data:  DATA},
];

const MOCK_GOOSE: MockGoose[] = [
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
  {appID: 1, macDst: 1, GOCB: 1, datSet: 1},
]

export interface PeriodicElement {
  id: number;
  svID: string;
  appID: number;
  macDestination: string;
  data: Element[];
}
export interface Element {
  name: string;
  value: number;
  angle: number;
  freq: number;
  value2: number;
  col: string;
}
export interface MockGoose {
  appID: number;
  macDst: number;
  GOCB: number;
  datSet: number;
}
