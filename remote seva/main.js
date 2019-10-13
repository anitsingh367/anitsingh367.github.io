//Material Design Starts {
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.collapsible').forEach(function (elems) {
        M.Collapsible.init(elems);
    }); // Initiator for Collapsible
    document.querySelectorAll('select').forEach(function (elems) {
        M.FormSelect.init(elems);
    }); //Initiator for the selectors
    document.querySelectorAll('.modal').forEach(function (elems) {
        M.Modal.init(elems);
    }); // Initiator for the modal

});
//  } Material Design Ends


// JsStore Starts here
/**
 * It is a IndexedDB wrapper that helps create In-Browser Database and execute queries.
 */
// This section creates the connection and defines the DB {

var connection = new JsStore.Instance();
initJsStore();

var dbName = 'JsStore_Demo';

function getDbSchema() {
    var tb1userInfo = {
        name: 'userInfo',
        columns: {
            // Here "Id" is name of column 
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            firstName: {
                notNull: true,
                dataType: "string"
            },
            lastName: {
                notNull: true,
                dataType: "string"
            },
            Age: {
                notNull: true,
                dataType: "string"
            }
        }
    };


    var db = {
        name: dbName,
        tables: [tb1userInfo]
    }
    return db;
}
// executing jsstore inside a web worker


async function initJsStore() {
    var database = getDbSchema();
    const isDbCreated = await connection.initDb(database);
    if (isDbCreated === true) {
        console.log("db created");
        // here you can prefill database with some data
    } else {
        console.log("db opened");
    }

}
async function addPatient(patient){
    var value = patient
    var noOfDataInserted = await connection.insert({
        into: 'userInfo',
        values: [value]
    });
    if (noOfDataInserted > 0) {
        alert('successfully added');
    }
}
// }

// Handling the click event and inserting data {
// First take the input values in variables and check if null
document.getElementById("regBtn").addEventListener("click", function () {
    var frstName = document.getElementById("first_name");
    var lstName = document.getElementById("last_name");
    var e = document.getElementById('ageSelect');
    var Age = e.options[e.selectedIndex].text;
    if ((frstName.value == null || frstName.value.trim().length == 0) || (lstName.value == null || lstName.value.trim().length == 0) || (e.value == "")) {
        alert("Please check all the details");
        return;
    }

    console.log(frstName.value)
    console.log(lstName.value)
    console.log(Age)
    var value = {
        firstName: frstName.value,
        lastName: lstName.value,
        Age: Age
    }
    addPatient(value);
    frstName.value= "";
    lstName.value = "";
    e.value = "";
    document.querySelectorAll('select').forEach(function (elems) {
        M.FormSelect.init(elems);
    });
    

});


//}