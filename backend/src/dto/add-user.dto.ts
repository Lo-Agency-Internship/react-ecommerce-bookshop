export class AddUserDto{
    readonly name:string;
    readonly email:string;
    readonly password:string;
    readonly salt:string;
    readonly address:string;
    readonly isAdmin: boolean;

}