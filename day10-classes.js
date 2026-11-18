class User {
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    displayName() {
        console.log(this.name);
    }
}

let user1 = new User("Ravi", "Accenture");
let user2 = new User("John", "Accenture");

user1.displayName();
user2.displayName();


class User {
    login() {
        console.log("User logged in");
    }
}

class Admin extends User {
    dashboard() {
        console.log("Admin dashboard opened");
    }
}

let admin = new Admin();

admin.login();
admin.dashboard();



class User {

    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    displayUser() {
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Role:", this.role);
    }
}

let user1 = new User("Ravi", "ravi@gmail.com", "QA Engineer");

user1.displayUser();

