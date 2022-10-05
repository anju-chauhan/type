import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  data=0;
  isValid: boolean=false
  buttonValid: boolean =true
  product:any

  myClick(){
    this.data++;   
  }


  onclick(){
    if(this.data>=1){
    this.data--;
  }
  }

  showClk(){
     this.isValid=true
     this.buttonValid = false
     this.data++
       // (this.isValid=!this.isValid)
 }

 pics=[
{ id: 1,
title:'Esprit Ruffle Shirt',
price:'$16.64',
image:'https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&w=600',
},
{id: 2,
title:'Herschel supply',
price:'$35.31',
image:'https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&w=600',
},
{id: 3,
title:'Only Check Trouser',
price:'$16.64',
image:'https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&w=600',
},
{id: 4,
title:'Classic Trench Coat',
price:'$16.64',
image:'https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&w=600',
},
{id: 5,
title:'Front Pocket Jumper',
price:'$22.66',
image:'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{id: 6,
title:'Front Pocket Jumper',
price:'$22.66',
image:'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{id: 7,
title:'Front Pocket Jumper',
price:'$22.66',
image:'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{id: 8,
title:'Front Pocket Jumper',
price:'$22.66',
image:'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{id: 9,
title:'Converse All Star Hi Plimsolls',
price:'$34.98',
image:'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{id: 10,
title:'Converse All Star Hi Plimsolls',
price:'$34.98',
image:'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{id: 11,
title:'Converse All Star Hi Plimsolls',
price:'$34.98',
image:'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{id: 12,
title:'Converse All Star Hi Plimsolls',
price:'$34.98',
image:'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{id: 13,
title:'T-Shirt with Sleeve',
price:'$76.99',
image:'https://images.pexels.com/photos/1100372/pexels-photo-1100372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
id: 14,
title:'T-Shirt with Sleeve',
price:'$76.99',
image:'https://images.pexels.com/photos/1100372/pexels-photo-1100372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
id: 15,
title:'T-Shirt with Sleeve',
price:'$76.99',
image:'https://images.pexels.com/photos/1100372/pexels-photo-1100372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
id: 16,
title:'T-Shirt with Sleeve',
price:'$76.99',
image:'https://images.pexels.com/photos/1100372/pexels-photo-1100372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}]








  

constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {



    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('id'));
  console.log('productIdFromRoute',productIdFromRoute)
    this.product = this.pics.find(product => product.id === productIdFromRoute);


  }

}
