import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total=0;
  choice=0;
  total1=0;
  userInput;
  i=0;
  orders =[
    {name: 'chicken biryani',serves: 2,price: 300},
    {name: 'chicken hundi',serves: 4,price: 750},
    {name: 'veg biryani',serves: 1,price: 100},
    {name: 'chicken kabab',serves: 2,price: 250},
    {name: 'rozali kabab',serves: 2,price: 400}]
    
    
    cart=[] ;
  
    addFood(order)
    {
     this.cart.push(order)
    this.total=this.total+order.price;
    alert("Item Added To cart");
    
  }
  
  checkout()
  {
    this.total1=(this.total+this.total*5/100)
      this.choice=3;
    }

    changePage(index){
      this.choice=index;
    }
    
    promo(){
      this.total=this.total-(this.total*(10/100))
    }
    
    removeFood(index){
      this.total=this.total-this.cart[index].price; 
      this.cart.splice(index,1);
     
      alert("Item removed from cart");
      console.log(this.cart[index].price)
      
    }
    
    print(): void {
      let printContents, popupWin;
      printContents = document.getElementById('print-section').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Print tab</title>
            <style>
            //........Customized style.......
            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
      );
      popupWin.document.close();
  }
  }

