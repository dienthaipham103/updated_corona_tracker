import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  option = 0;

  dic = [{title: 'Theo dõi tình hình dịch bệnh Covid-19',
          description: 'Dịch bệnh bắt đầu ở Vũ Hán, tỉnh Hồ Bắc, Trung Quốc, vào tháng 12 năm 2019',
          case: 'Số ca nhiễm',
          death: 'Số ca tử vong',
          recovered: 'Số ca khỏi bệnh'},
          {title: 'Coronavirus Tracker',
          description: 'The outbreak started in Wuhan, Hubei province, China, in December 2019',
          case: 'Cases',
          death: 'Deaths',
          recovered: 'Recovered'}]

  constructor() { console.log(this.option)}

  show(content){
    return this.dic[this.option][content];
  }
}
