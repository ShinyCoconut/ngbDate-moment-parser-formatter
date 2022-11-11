import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable()
export class NgbDateMomentParserFormatter extends NgbDateParserFormatter {
    constructor() {
        super();
    };
    format(date: NgbDateStruct): string {
        if (date === null) {
            return '';
        }
        let d = moment({ year: date.year, 
                         month: date.month - 1, 
                         date: date.day });
        // choose desired formatting as a parameter for the format function
        return d.isValid() ? d.format('L') : '';
    }

    parse(value: string): NgbDateStruct {
        if (!value) {
            return null;
        }
        let d = moment(value);
        return d.isValid() ? { year: d.year(), 
                               month: d.month() + 1, 
                               day: d.date() } : null;
    }
}
