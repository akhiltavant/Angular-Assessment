import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shanu-cart',
  templateUrl: './shanu-cart.component.html',
  styleUrls: ['./shanu-cart.component.css']
})
export class ShanuCartComponent implements OnInit {
  cartForm!: FormGroup;
  cartItems: any[] = [];
  prodImage!:any;

  constructor(private formBuilder: FormBuilder,private cdf:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cartForm = this.formBuilder.group({
      Icode:['',Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      desc:['', Validators.required],
      user:['', Validators.required],
      img: ['', Validators.required]
    });
  }
  

  
  ImageUpload(event:any)

{

  var file=event.target.files.length;

  for(let i=0;i<file;i++)

  {

    var reader=new FileReader();

    reader.onload=(event:any)=>{

      this.prodImage=event.target.result;

      this.cdf.detectChanges();

    }

    reader.readAsDataURL(event.target.files[i]);

  }

}
addToCart(): void {
  if (this.cartForm.valid) {
    const newItem = {
      Icode:this.cartForm.value.Icode,
      name: this.cartForm.value.name,
      price: this.cartForm.value.price,
      desc:this.cartForm.value.desc,
      user:this.cartForm.value.user,
      img:this.prodImage
    };
    this.cartItems.push(newItem);
    this.cartForm.reset();
    
    
  }
}
}
