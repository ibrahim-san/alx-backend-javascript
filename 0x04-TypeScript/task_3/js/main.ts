/// <reference path="crud.d.ts" />

import { RowElement, RowID } from "./interface";
import * as CRUD from './crud.js';

let row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };

const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(updatedRowID);