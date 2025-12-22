const user = {
    name: ";eo",

    login() {
        console.log(this.name + " logged in");
    },

    logout() {
        console.log(this.name + " logged out");
    }
};

user.login();
user.logout();