
import { SecurityUser } from '../../providers/security-api/security-api.model';


export class AppContext {
  public static user : SecurityUser;
  public static appName : string = 'Merion Cricket Club';
  public static applogoUrl : string = 'assets/imgs/logo.png';

  public static formatDateToString(date : Date) : string
  {
    const options : any = {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: 'America/New_York'  // doesn't work on safari
    };

    var d = new Date(date);  // convert to a javascript date type
    //var offsetHours = d.getTimezoneOffset()/60; // calculate the difference in hours
    //var td = new Date(d.getFullYear(), d.getMonth(), d.getDay(), d.getHours()+offsetHours, d.getMinutes()); // apply +4 time zone
    return d.toLocaleString('en-us', options);
  }

}
