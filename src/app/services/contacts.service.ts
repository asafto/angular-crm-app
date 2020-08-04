import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _contacts: Contact[] = [
    {
      "name": "Boone Young",
      "email": "booneyoung@ovium.com",
      "birthday": new Date("2019-05-27T09:51:21"),
      "phones": [
        "+1 (882) 526-3433"
      ]
    },
    {
      "name": "Hester Smith",
      "email": "hestersmith@ovium.com",
      "birthday": new Date("2017-09-08T04:01:25"),
      "phones": []
    },
    {
      "name": "Susanna Daniel",
      "email": "susannadaniel@ovium.com",
      "birthday": new Date("2014-07-02T11:43:46"),
      "phones": [
        "+1 (929) 534-3261",
        "+1 (999) 434-3897"
      ]
    },
    {
      "name": "Davidson Browning",
      "email": "davidsonbrowning@ovium.com",
      "birthday": new Date("2016-03-04T10:29:00"),
      "phones": [
        "+1 (918) 553-3244",
        "+1 (996) 478-2149",
        "+1 (875) 587-2872"
      ]
    },
    {
      "name": "Beatriz Cash",
      "email": "beatrizcash@ovium.com",
      "birthday": new Date("2019-12-14T09:44:10"),
      "phones": [
        "+1 (973) 518-2908",
        "+1 (921) 564-2595"
      ]
    },
    {
      "name": "Mckay Spears",
      "email": "mckayspears@ovium.com",
      "birthday": new Date("2016-10-18T06:19:20"),
      "phones": [
        "+1 (818) 558-3514"
      ]
    },
    {
      "name": "Burnett Wagner",
      "email": "burnettwagner@ovium.com",
      "birthday": new Date("2017-08-31T08:19:35"),
      "phones": [
        "+1 (966) 596-3527",
        "+1 (987) 527-2171"
      ]
    },
    {
      "name": "Beth Combs",
      "email": "bethcombs@ovium.com",
      "birthday": new Date("2019-08-30T07:17:18"),
      "phones": [
        "+1 (919) 457-3210"
      ]
    },
    {
      "name": "Ila Casey",
      "email": "ilacasey@ovium.com",
      "birthday": new Date("2015-04-28T09:14:11"),
      "phones": []
    },
    {
      "name": "Holman Pearson",
      "email": "holmanpearson@ovium.com",
      "birthday": new Date("2014-09-19T12:40:37"),
      "phones": [
        "+1 (808) 475-2668",
        "+1 (863) 598-3468",
        "+1 (822) 576-2187"
      ]
    }
  ];

  getAll(): Contact[] {
    return this._contacts;
  }

  constructor() { }
}
