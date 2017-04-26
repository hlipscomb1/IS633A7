function ShowMenu(selection)
{
    document.getElementById("first").style.visibility = "hidden";
    document.getElementById("second").style.visibility = "hidden";
    document.getElementById("third").style.visibility = "hidden";
    document.getElementById("fourth").style.visibility = "hidden";
    document.getElementById("fifth").style.visibility = "hidden";
    document.getElementById("sixth").style.visibility = "hidden";
    document.getElementById("seventh").style.visibility = "hidden";
    document.getElementById("eighth").style.visibility = "hidden";
    document.getElementById("ninth").style.visibility = "hidden";
    document.getElementById("tenth").style.visibility = "hidden";
    
    
    switch (selection)
    {
        case "first":
            document.getElementById("first").style.visibility ="visible";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("confirm").style.visibility ="hidden";
            document.getElementById("first").style.position ="relative";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "visible";
            document.getElementById("customerDisplay").style.position = "relative";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            ListStores();
            break;
        case "second":
            document.getElementById("second").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("confirm").style.visibility ="hidden";
            document.getElementById("second").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "visible";
            document.getElementById("orderDisplay").style.position = "relative";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "third":
            document.getElementById("third").style.visibility ="visible";
            document.getElementById("orders2").style.visibility ="visible"; 
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("third").style.position ="relative";
            document.getElementById("orders2").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "visible";
            document.getElementById("currentorderDisplay").style.position = "relative";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "fourth":
            document.getElementById("fourth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("fourth").style.position = "relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absloute";
            document.getElementById("historyDisplay").style.visibility = "visible";
            document.getElementById("historyDisplay").style.position = "relative";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "fifth":
            document.getElementById("fifth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("fifth").style.position = "relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
             document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absloute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "visible";
            document.getElementById("addcustomerdisplay").style.position = "relative";
            break;
        case "sixth":
            document.getElementById("sixth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility = "hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("confirm").style.visibility ="hidden";
            document.getElementById("sixth").style.position = "relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position = "absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "seventh":
            document.getElementById("seventh").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility = "hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("seventh").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position = "absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "eighth":
            document.getElementById("eighth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility = "hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility ="hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("eighth").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position = "absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "ninth":
            document.getElementById("ninth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility = "hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility ="hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("ninth").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position = "absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "tenth":
            document.getElementById("tenth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility = "hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility ="hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("orders2").style.visibility ="hidden";
            document.getElementById("tenth").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position = "absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        case "none":
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("sixth").style.visibility = "hidden";
            document.getElementById("seventh").style.visibility = "hidden";
            document.getElementById("eighth").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("tenth").style.visibility = "hidden";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("sixth").style.position = "absolute";
            document.getElementById("seventh").style.position = "absolute";
            document.getElementById("eighth").style.position = "absolute";
            document.getElementById("ninth").style.position = "absolute";
            document.getElementById("tenth").style.position = "absolute";
            document.getElementById("customerDisplay").style.visibility = "hidden";
            document.getElementById("customerDisplay").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            document.getElementById("historyDisplay").style.visibility = "hidden";
            document.getElementById("historyDisplay").style.position = "absolute";
            document.getElementById("addcustomerdisplay").style.visibility = "hidden";
            document.getElementById("addcustomerdisplay").style.position = "absolute";
            break;
        default:
                alert("Please select a different menu option");
    }
}

function ListStores()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);   
        }
    };
    objRequest.open("GET", url, true);
    objRequest.send();
}

function GenerateOutput(result)
{
    var display = "<table><tr><th>View Order</th><th>Customer ID</th><th>Company Name</th><th>City</th></tr>";
    var count = 0;
    var customerID = "";
    var companyname = "";
    var city = "";
    for(count = 0;count < result.GetAllCustomersResult.length;count ++)
    {
        customerID = result.GetAllCustomersResult[count].CustomerID;
        companyname = '<a href="javascript:showOrders(' + "'" + customerID + "');" + '">';
        companyname += result.GetAllCustomersResult[count].CompanyName;
        companyname += '</a>';
        city = result.GetAllCustomersResult[count].City;
        display += '<tr><td><button onclick="get2Current(' + "'" + customerID + "');" + '">View Current Order</button></td><td>' + customerID + "</td><td>" + companyname + "</td><td>" + city + '</td><td><button onclick="BeforeDelete(' + "'" + customerID + "');" + '">Delete Customer</button></td></tr>';
    }
    display += "</table>";
    document.getElementById("customerDisplay").innerHTML = display; }

function getOrders()
{
  var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
  url += document.getElementById("custidinput").value;
  
  objRequest.onreadystatechange = function()
  {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var output = JSON.parse(objRequest.responseText);
        orderOutput(output); }
  };
  objRequest.open("GET", url, true);
  objRequest.send();
}
  
function orderOutput (result)
  {
    var orderText = "<table><tr><th>Order Name</th><th>Total Ordered</th></tr>";
    var count = 0;
    for(count = 0; count < result.length; count ++)
    {
       orderText += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
    }
    orderText += "</table>";
    document.getElementById("orderDisplay").innerHTML = orderText;
  }

function showOrders(customerID) {
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += customerID;
    var input = document.getElementById("custidinput");
    input.value = "";
    document.getElementById("menu").selectedIndex = "2";
    
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var output = JSON.parse(objRequest.responseText);
            showOutput(output);
        }
    };
    
    objRequest.open("GET", url, true);
    objRequest.send();
}
function showOutput(result) {
    var count = 0;
    var orderText = "<table><tr><th>Product Name</th><th>Total</th></tr>";
    
    for (count = 0; count < result.length; count ++) {
    orderText += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";    
    }
    orderText += "</table>";
    ShowMenu("second");
    document.getElementById("menu").selectedIndex = "2";
    document.getElementById("orderDisplay").innerHTML = orderText; }

function goBack() {
    ShowMenu("first");
    document.getElementById("menu").selectedIndex = "1";
}

function getCurrent()
{
  var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
  url += document.getElementById("custidinput2").value;
  
  objRequest.onreadystatechange = function()
  {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var output = JSON.parse(objRequest.responseText);
        currentOutput(output); }
  };
  objRequest.open("GET", url, true);
  objRequest.send();
}
  
function currentOutput(result)
  {
    var count = 0;
    var customerID = document.getElementById("custidinput2").value;
    var orderText2 = "<table><tr><th>Button</th><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Post Code</th><th>Shipped Date</th></tr>";
    
    for(count = 0; count < result.GetOrdersForCustomerResult.length; count ++)
    {
       orderText2 += '<tr><td><button onclick="BeforeUpdate(' + "'" + customerID + "')" + '">Update Current Order</button></td><td>' + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity +"</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
    }
    orderText2 += "</table>";
    ShowMenu("third");
    document.getElementById("menu").selectedIndex = "3";
    document.getElementById("currentorderDisplay").innerHTML = orderText2;
  }
  
function get2Current(customerID) {
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += customerID;
    var input = document.getElementById("custidinput2");
    input.value = "";
    document.getElementById("menu").selectedIndex = "3";
    
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var output = JSON.parse(objRequest.responseText);
            currentOutput2(output);
        }
    };
    
    objRequest.open("GET", url, true);
    objRequest.send();
}
function currentOutput2(result) {
    var count = 0;
    var orderText2 = "<table><tr><th>Update Order</th><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Post Code</th><th>Shipped Date</th></tr>";
    
    for(count = 0; count < result.GetOrdersForCustomerResult.length; count ++)
    {
       orderid = result.GetOrdersForCustomerResult[count].OrderID;
        shipaddress = result.GetOrdersForCustomerResult[count].ShipAddress;
        shipcity = result.GetOrdersForCustomerResult[count].ShipCity;
        shipname = result.GetOrdersForCustomerResult[count].ShipName;
        shippostal = result.GetOrdersForCustomerResult[count].ShipPostcode;
        updateorderinfo = '<button onclick="BeforeUpdate(' + "'" + orderid + "')" + '">Update Current Order</button>';
       orderText2 += "<tr><td>" + updateorderinfo + "</td><td>" + orderid + "</td><td>" + shipaddress + "</td><td>" + shipcity + "</td><td>" + shipname + "</td><td>" + shippostal + "</td></tr>";
    }
    orderText2 += "</table>";
    document.getElementById("currentorderDisplay").innerHTML = orderText2;
    ShowMenu("third");
  }
  
function BeforeUpdate(orderid)
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderInfo/";
    url += orderid;
    document.getElementById("menu").selectedIndex = "4";
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
        var result = JSON.parse(objRequest.responseText);
        EditUpdate(result);  
        }
    };
    objRequest.open("GET", url, true);
    objRequest.send();
}

function EditUpdate(result)
{
    document.getElementById("orderid").value = result[0].OrderID;
    document.getElementById("orderid").disabled = "true";
    document.getElementById("shipaddress").value = result[0].ShipAddress;
    document.getElementById("shipcity").value = result[0].ShipCity;
    document.getElementById("shipname").value = result[0].ShipName;
    document.getElementById("postalinput").value = result[0].ShipPostcode;
    ShowMenu("fourth");
}

function Update()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/UpdateOrderAddress";
    var orderid = Number(document.getElementById("orderid").value);
    var shipaddress = document.getElementById("shipaddress").value;
    var shipcity = document.getElementById("shipcity").value;
    var shipname = document.getElementById("shipname").value;
    var shippostal = document.getElementById("postalinput").value;
    var parameters = '{"OrderID":' + orderid + ',"ShipAddress":"' + shipaddress + '","ShipCity":"' + shipcity + '","ShipName":"' + shipname + '","ShipPostCode":"' + shippostal + '"}';
    objRequest.onreadystatechange = function()
    {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
             var result = JSON.parse(objRequest.responseText);
             var outcome = result.WasSuccessful;
            var error = result.Exception;
            UpdateResult(outcome, error);
            console.log(result);
            UpdateResult(result);
            ShowMenu("first");
            document.getElementById("menu").selectedIndex = "1";
        }
};
objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(parameters);
}

function UpdateResult(result, Exception)
{
//    switch (success)
    switch(result)
    {
        case 1:
            alert("The operation was successful");
            break;
        case 0:
            alert("The operation was not successful:" + Exception); 
            break;
        case -2:
            alert("The operation was not successful becasue the data string supplied coul not be deserialized into the service object.");
            break;
        case -3:
            alert("The operation was not successful because a record with the supplied Order ID could not be found.");
            break;
    } 
}

function upperCaseF(a){
    setTimeout(function(){
        a.value = a.value.toUpperCase();
    }, 1);
}

function addCus()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    var custid = document.getElementById("custidinput3").value;
    var compname = document.getElementById("addcname").value;
    var city = document.getElementById("addcity").value;
    var parameters = '{"CustomerID":"' + custid + '","CompanyName":"' + compname + '","City":"' + city + '"}';
    objRequest.onreadystatechange = function()
    {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
             var Result = JSON.parse(objRequest.responseText);
             var outcome = Result.WasSuccessful;
            var error = Result.exception;
            CreateResult(outcome, error);
            console.log(Result);
            CreateResult(Result);
            ShowMenu("first");
            document.getElementById("menu").selectedIndex = "1";
        }
};
objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(parameters);
}

function CreateResult(Result, exception)
{
//    switch (success)
    switch(Result)
    {
        case 1:
            alert("The operation was successful");
            break;
        case 0:
            alert("The operation was not successful:" + exception); 
            break;
        case -2:
            alert("The operation was not successful becasue the data string supplied coul not be deserialized into the service object.");
            break;
        case -3:
            alert("The operation was not successful because a record with the supplied Order ID could not be found.");
            break;
    } 
}

function addNew() {
    ShowMenu("fifth");
    document.getElementById("menu").selectedIndex = "5";
}

function ConfirmD()
{
  document.getElementById("confirm").style.visibility = "visible";
  document.getElementById("confirm").style.position = "relative";
}

function Reject()
{
    alert("The Delete Action is Cancelled, You Will Now Be Taken Back To The Customer List.");
    ShowMenu("first");
    document.getElementById("menu").selectedIndex = "1";
    document.getElementById("confirm").style.visibility = "hidden";
}

function BeforeDelete(customerID)
{
    document.getElementById("custidinput4").value = customerID;
    document.getElementById("menu").selectedIndex = "6";
    ShowMenu("sixth");
    
}

function Delete()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/DeleteCustomer/";
    url += document.getElementById("custidinput4").value;
    
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var Result = JSON.parse(objRequest.responseText);
             var outcome = Result.DeleteCustomerResult.WasSuccessful;
            var error = Result.DeleteCustomerResult.Exception;
            DeleteResult(outcome, error);
            console.log(Result);
            DeleteResult(Result);
            ShowMenu("first");
            document.getElementById("menu").selectedIndex = "1";
        }
    };
    
    objRequest.open("GET", url, true);
    objRequest.send();
}
function DeleteResult(Result, Exception)
{
//    switch (success)
    switch(Result)
    {
        case 1:
            alert("The operation was successful");
            break;
        case 0:
            alert("The operation was not successful:" + Exception); 
            break;
        case -2:
            alert("The operation was not successful becasue the data string supplied coul not be deserialized into the service object.");
            break;
        case -3:
            alert("The operation was not successful because a record with the supplied Customer ID could not be found.");
            break;
    } 
}

function CurrentLocation()
{
    var geo = navigator.geolocation;
    if(geo)
    {
        geo.getCurrentPosition(showPosition);
    }
    else
    {
        alert("Geolocation is not supported");
    }
}

function showPosition(position)
{
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var maplink = "http://maps.google.com/maps/api/staticmap?center=";
    maplink = maplink + latitude + "," + longitude;
    maplink = maplink + '&zoom=15&size=512x512&maptype=roadmap&sensor=true&markers=color:blue%7Clabel:A%7C';
    maplink = maplink + latitude + "," + longitude;
    var imgElement = document.getElementById("currentplace");
    imgElement.src = maplink;
    document.getElementById("latitude").innerHTML = latitude;
    document.getElementById("longitude").innerHTML = longitude;
}

function TakePhoto()
{
    navigator.camera.getPicture(onSuccess, onFail, { quality: 20, destinationtype: destinationtype.FILE_URl, saveToPhotoAlbum: true });
}

function onSuccess(imageURl)
{
    var picdisplay = document.getElementById("photo");
    picdisplay.style.display = "relative";
    picdisplay.src = imageURl;
}

function onFail(message)
{
    alert("Failed because: " + message);
}

function SelectContact()
{
    navigator.contacts.pickContact(function(contact)
        {
            var contactinfo = "";
            contactinfo += contact.name.givenName + " " + contact.name.familyName + "<br>";
            var count = 0;
            if(contact.phoneNumbers !== null)
            {
                for(count=0; count < contact.phoneNumbers.length; count++)
                {
                    contactinfo += contact.phoneNumbers[count].type + ": " + contact.phoneNumbers[count].value + "<br>";
                }
            }
            if(contact.emails !== null)
            {
                for(count=0; count < contact.emails.length; count++)
                {
                    contactinfo += contact.emails[count].type + ": " + contact.emails[count].value + "<br>";
                }
            }
            document.getElementById("contactname").innerHTML = contactinfo;
        }, function(err)
           {
            alert("Error: " + err);
           });
}

function SearchContacts()
{
    var options = new ContactFindOptions();
    options.filter = document.getElementById("contactlastname").value;
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.name];
    var fields = [navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, contactSuccess, contactError, options);
}

function contactSuccess(contacts)
{
    var contactinfo = "Contact Names: " + "<br>";
    for(var count=0; count<contacts.length; count++)
    {
        contactinfo += contacts[count].name.givenName + " " + contacts[count].name.familyName + "<br>";
    }
    document.getElementById("contactsearchresults").innerHTML = contactinfo;
}

function contactError(contactError)
{
    alert('onError!');
}