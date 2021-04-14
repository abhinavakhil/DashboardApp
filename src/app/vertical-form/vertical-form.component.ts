import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vertical-form',
  templateUrl: './vertical-form.component.html',
  styleUrls: ['./vertical-form.component.css']
})
export class VerticalFormComponent implements OnInit {

  @Input('searchedterm') searchedterm: any;

  userItemArray:any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    //this.getPostsData();
    console.log(this.searchedterm);
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

 getPostsData(searchterm: any){
   return this.http.get(`localhost:8080/aggregation/${searchterm}`).subscribe(res=>{
     const itemArray = Object.entries(res);
     const item_left = itemArray.filter((el,i)=> i%2 == 0);
     const item_right = itemArray.filter((el,i) => i%2 == 1);

     this.userItemArray =  [{item_left: item_left}, {item_right: item_right}];
     console.log(this.userItemArray);
   });
 }

 ngOnChanges(changes: SimpleChanges) {
  if (changes['searchedterm']) {
     console.log(this.searchedterm);

  }
}



}
