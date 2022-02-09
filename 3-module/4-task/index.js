function showSalary(users, age) {
    let someUsers = users.filter(user => user.age <= age);
    let usersBalance = someUsers.map(user => user.name + ', ' + user.balance);
    let strUsers = usersBalance.join('\n');
    return strUsers;
}
