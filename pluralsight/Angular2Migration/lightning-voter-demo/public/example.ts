export interface IPerson {
  firstName: string;
  lastName: string;
  getFullName(): string;
  setFullName(fullName: string): void;
  saveName(cb: (firstName: string, lastName: string) => void): void;
}


class Joe implements IPerson {

  constructor(public firstName: string, public lastName: string) {
  }

  getFullName() {
    // implementation
    return this.firstName + " " + this.lastName;
  }
  setFullName(fullName: string) {
    // implementation
  }
  saveName(cb) {
    // Implementation
    cb(this.firstName, this.lastName);
  }
};


let j = new Joe("", "");
j.setFullName("");
