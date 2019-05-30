import { PhoneNumber } from './phone-number.model';

export class User {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  state: string;
  city: string;
  zip: number;
  gender: string;
  dob: Date;
  email: string;
  telephone: PhoneNumber;
  metadata: {
    signUpDate: Date;
    lastSignIn: Date;
  };
}
