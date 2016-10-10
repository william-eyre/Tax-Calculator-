/**
 * Created by william.eyre on 07/10/2016.
 */
var e1 = document.getElementById("button");
e1.addEventListener("click", tax, false);

var taxFree = 11000;
// this variables will allow my function to perform the calculations
// they are left blank to allow for different inputs to be entered

function tax()
{

    var taxAt40 = 0;
    var taxAt20 = 0;
    var netSalary =0; // these variables are here so that when a value
    var grossSalary = 0; // is less than 11000 the rest of the tax brackets are displayed at 0

    var salary = parseInt(document.getElementById("salaryInput").value);
    document.getElementById("grossSalary").innerHTML = salary;

    if (salary >= 43000)
    {
        taxAt40 = (salary - 43000) * 0.4;
        taxAt20 = 32000 * 0.2;
        netSalary = salary-taxAt40-taxAt20;  // this is figuring the tax out for any value above 43000
    }
    else if (salary > 11000)
    {
        taxAt20 = (salary - 11000) * 0.2; // this is figuring out the tax for any value above 11000
        netSalary = salary - taxAt20;
    }

    (document.getElementById("taxAt40").innerHTML) = taxAt40;
    (document.getElementById("taxAt20").innerHTML) = taxAt20; //outputting all my data to the correct boxes
    (document.getElementById("grossSalary").innerHTML) = salary;
    (document.getElementById("netSalary").innerHTML) = netSalary;
    (document.getElementById("taxFreeAllowance").innerHTML) = taxFree;
}


