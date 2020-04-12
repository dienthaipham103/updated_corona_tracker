import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  opt = 0;

  change = new Subject();

  set option(value: number) {
    this.opt = value;
    this.change.next();
  }

  get option() {
    return this.opt;
  }

  dic = [{title: 'Theo dõi tình hình dịch bệnh Covid-19',
          description: 'Dịch bệnh bắt đầu ở Vũ Hán, tỉnh Hồ Bắc, Trung Quốc, vào tháng 12 năm 2019',
          case: 'Số ca nhiễm',
          death: 'Số ca tử vong',
          recovered: 'Số ca khỏi bệnh'},
          {title: 'Coronavirus Tracker',
          description: 'The outbreak started in Wuhan, Hubei province, China, in December 2019',
          case: 'Cases',
          death: 'Deaths',
          recovered: 'Recovered'}];

  constructor() {
    console.log(this.option);
  };

  show(content) {
    return this.dic[this.option][content];
  }
}
