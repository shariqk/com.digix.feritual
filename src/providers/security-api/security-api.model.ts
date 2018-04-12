
export class SecurityUser {
  userId: number;
  firstName: string;
  lastName: string;

  // this login name is stored and used for all API calls
  loginName: string;

  // this token is stored and used for all API calls
  loginToken : string;

  // this token expires on this date
  loginTokenExpires : Date;

  userEntity : any;
}
