import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  public sendEmail(email:string,bericht:string) {
    emailjs.init('user_WuBT7NuDcPR3jWbXvcPqi');
    var emailJSpar = {
      name: email,
      message: bericht,
    };
    emailjs
      .send('joeyemail', 'sendEmail', emailJSpar)
      .then(
        function (response) {
          window.alert('Bericht Verzonden!')
          console.log('SUCCESS!', response.status, response.text);
        },
        function (err) {
          console.log('FAILED...', err);
        }
      );
  }
}
