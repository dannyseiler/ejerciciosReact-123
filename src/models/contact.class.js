
export class Contact {
  nameUser = "";
  lastnameUser = "";
  email = "";
  status = false;

  constructor(nameUser, lastnameUser, email, status) {
    this.nameUser = nameUser;
    this.lastnameUser = lastnameUser;
    this.email = email;
    this.status = status;
  }
}
