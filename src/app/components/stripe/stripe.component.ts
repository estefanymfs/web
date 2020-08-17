import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductService } from '../../service/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  public cardFG: FormGroup;
  public productId: string;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      this.productId = params.id;
    });
  }

  ngOnInit() {
    this.reset();
  }

  reset(){
    this.cardFG = this.fb.group({
      email:['',[Validators.email]],
      cardNumber:['',[Validators.minLength(16)]],
      expMonth:['',[Validators.minLength(2)]],
      expYear:['',[Validators.minLength(4)]],
      cvv:['',[Validators.minLength(3)]],
    })
  }

  onSubmit(){
    if(this.cardFG.valid){
      let request = Object.assign({},this.cardFG.value);
      request.amount ='5000',
      request.productId = this.productId,

      this.productService.createPayment(request)
      .subscribe(
        (response: any) => {
          console.log('response', response);
        },
        (error: any) => {
          console.log('error', error);
        }
      );
    } else{
      console.log('Verifica los campos e intenta nuevamente.Formulario inválido');
    }
  }

}
