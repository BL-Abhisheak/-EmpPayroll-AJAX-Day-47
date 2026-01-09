

function getEmployeeByIdCallback(id, callback) {
    console.log("Fetching employee using CALLBACK...");

    setTimeout(() => {
        const employee = {
            id: id,
            name: "Abhisheak",
            department: "B S",
            salary: 80000
        };

        callback(employee);
    }, 2000);
}

getEmployeeByIdCallback(101, (employee) => {
    console.log("Employee received (Callback):");
    console.log(employee);
});



function getEmployeeByIdPromise(id) {
    return new Promise((resolve, reject) => {
        console.log("Fetching employee using PROMISE...");

        setTimeout(() => {
            const employee = {
                id: id,
                name: "Gantla",
                department: "Lakshmi",
                salary: 65000
            };

            resolve(employee);
        }, 2000);
    });
}


getEmployeeByIdPromise(102)
    .then(employee => {
        console.log("Employee received (Promise):");
        console.log(employee);
    })
    .catch(error => {
        console.log("Error:", error);
    });
