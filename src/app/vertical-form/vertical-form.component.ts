import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-form',
  templateUrl: './vertical-form.component.html',
  styleUrls: ['./vertical-form.component.css']
})
export class VerticalFormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getPostsData();
  }


 userItems= [
   {
     item_left:{
        "date": "06-01-2021",
        "install":"6",
        "deinstall":"6",
        "id": 6,
        "componentInstall": "6",
        "componentDeInstall": "14",
        "site_move":"3"
     },
     item_right:{
        "date": "07-01-2021",
        "install":"7",
        "deinstall":"7",
        "id": 7,
        "componentInstall": "1",
        "componentDeInstall": "16",
        "site_move":"12"
     }
    },
    {
      item_left:{
         "date": "01-01-2021",
         "install":"1",
         "deinstall":"3",
         "id": 6,
         "componentInstall": "15",
         "componentDeInstall": "10",
         "site_move":"13"
      },
      item_right:{
         "date": "02-01-2021",
         "install":"2",
         "deinstall":"3",
         "id": 7,
         "componentInstall": "11",
         "componentDeInstall": "12",
         "site_move":"19"
      }
    },
    {
      item_left:{
         "date": "03-01-2021",
         "install":"11",
         "deinstall":"13",
         "id": 6,
         "componentInstall": "10",
         "componentDeInstall": "19",
         "site_move":"3"
      },
      item_right:{
         "date": "04-01-2021",
         "install":"22",
         "deinstall":"4",
         "id": 7,
         "componentInstall": "18",
         "componentDeInstall": "8",
         "site_move":"7"
      }
    },
    {
      item_left:{
         "date": "05-01-2021",
         "install":"111",
         "deinstall":"113",
         "id": 6,
         "componentInstall": "110",
         "componentDeInstall": "119",
         "site_move":"13"
      },
      item_right:{
         "date": "06-01-2021",
         "install":"212",
         "deinstall":"41",
         "id": 7,
         "componentInstall": "181",
         "componentDeInstall": "18",
         "site_move":"71"
      }
    }
 ]

 getPostsData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  // http method
  //  return this.http.get("url").subscribe(res=>{
  //    console.log(res);
  //  });
 }



}
