import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, Route, ActivatedRoute, Router } from '@angular/router';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputInnerLableComponent } from '../../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';
import { AdminUserServices } from '../../../services/admin-user.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { governorates, locations } from '../../../utilities/geoData';
import { InputInnerDropdownComponent } from '../../../components/formComponents/input-inner-dropdown/input-inner-dropdown.component';
import { CommonModule } from '@angular/common';
import { PromptConfirmComponent } from '../../../components/messagesComponents/prompt-confirm/prompt-confirm.component';
import { PromptDangerComponent } from '../../../components/messagesComponents/prompt-danger/prompt-danger.component';

@Component({
  selector: 'app-one-user',
  standalone: true,
  providers: [AdminUserServices],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    InputComponent,
    InputInnerLableComponent,
    CardPromptComponent,
    CardCtaComponent,
    InputInnerDropdownComponent,
    CommonModule,
    PromptConfirmComponent,
    PromptDangerComponent,
  ],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css',
})
export class OneUserComponent {
  @Input() isInputTouched: boolean = false;
  @Input() innerInputTouched: boolean = false;
  @Output() userData = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private userService: AdminUserServices,
    private myrouter: Router
  ) {}

  user: any;
  userID!: string;
  locations: any[] = locations;
  governorates: string[] = governorates;
  cities_1: any;
  cities_2: any;
  isDisabeled: boolean = true;
  action: string = '';
  promptText: string = '';
  ngOnInit() {
    this.userID = this.route.snapshot.params['user_ID'];
    this.userService.getUser(this.userID).subscribe({
      next: (data) => {
        this.user = data;
        this.user.email = this.user.email.toLowerCase();
        const birthDate = getBirthDateFromAge(this.user.age);
        this.formGroup.get('_id')?.patchValue(this.user._id);
        this.formGroup.get('firstName')?.patchValue(this.user.firstName);
        this.formGroup.get('lastName')?.patchValue(this.user.lastName);
        this.formGroup.get('email')?.patchValue(this.user.email);
        this.formGroup.get('age')?.patchValue(birthDate);
        this.formGroup.get('gender')?.patchValue(this.user.gender);
        this.formGroup.get('phone_1')?.patchValue(this.user.phones[0]);
        this.formGroup.get('phone_2')?.patchValue(this.user.phones[1]);
        this.formGroup.get('state_1')?.patchValue(this.user.address_1.state);
        this.user.address_2
          ? this.formGroup.get('state_2')?.patchValue(this.user.address_2.state)
          : null;

        this.formGroup.get('street_1')?.patchValue(this.user.address_1.street);
        this.user.address_2
          ? this.formGroup
              .get('street_2')
              ?.patchValue(this.user.address_2.street)
          : null;
        this.getSelectedGov_1(this.user.address_1.state);
        this.formGroup.get('city_1')?.patchValue(this.user.address_1.city);
        this.user.address_2
          ? this.formGroup.get('city_2')?.patchValue(this.user.address_2.city)
          : null;
        this.promptText =
          'You are trying to modify user ' + this.user.firstName;
      },
    });
  }

  formGroup = new FormGroup({
    _id: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone_1: new FormControl('', [Validators.required]),
    phone_2: new FormControl('', [Validators.required]),
    street_1: new FormControl('', [Validators.required]),
    city_1: new FormControl('', [Validators.required]),
    state_1: new FormControl('', [Validators.required]),
    street_2: new FormControl('', [Validators.required]),
    city_2: new FormControl('', [Validators.required]),
    state_2: new FormControl('', [Validators.required]),
    genericDropDown: new FormControl('', [Validators.required]),
  });

  onSubmit(e: any) {
    e.preventDefault();
    console.log(this.formGroup.value);
  }

  sendUserData(e: any) {
    this.userData.emit(this.user);
  }
  // to undisable buttons
  innerinputTouched(e: any) {
    this.isDisabeled = e;
  }
  InputTouched(e: any) {
    this.isDisabeled = e;
  }
  handleSuspending(x: any) {
    this.action = 'suspend';
  }
  handleDeleting(x: any) {
    this.action = 'delete';
  }

  handleUpdate(x: any) {
    this.userService.updateUser(this.userID, this.formGroup.value).subscribe({
      next(x) {
        console.log(x);
      },
      error(x) {
        console.log(x);
      },
    });
  }

  getSelectedGov_1(gov_1: any) {
    this.locations.map((l) =>
      l.governorate === this.formGroup.get('state_1')?.value
        ? (this.cities_1 = l.cities)
        : null
    );
  }

  getSelectedGov_2(gov_2: any) {
    this.locations.map((l) => {
      return l.governorate === this.formGroup.get('state_2')?.value
        ? (this.cities_2 = l.cities)
        : null;
    });
  }
  handleConfirming(x: any) {
    console.log(x);
  }
}
function getBirthDateFromAge(age: number): string {
  // Get the current date
  const currentDate: Date = new Date();

  // Calculate the birth date by subtracting the age from the current date
  const birthDate: Date = new Date(
    currentDate.getTime() - age * 365 * 24 * 60 * 60 * 1000
  ); // Assuming a year has 365 days

  // Extract day, month, and year from the birth date
  const day: number = birthDate.getDate();
  const month: number = Math.floor(Math.random() * 12);
  const year: number = birthDate.getFullYear();

  // Format the birth date as a string in 'dd mm yyyy' format
  const birthDateStr: string = `${year}-${month
    .toString()
    .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return birthDateStr;
}
