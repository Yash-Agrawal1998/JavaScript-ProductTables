var dataObject=[];
function submitData() 
{
  var productId = document.getElementById("productId").value;
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  var data ={ 
        "Id": productId, 
        "Name":productName,
        "Price":productPrice
        };

        //Inserting data into the array
        dataObject.push(data);

        //display data
        display(dataObject);
}

function display(data)
{   
    var tData=document.getElementById("tableData");
    tData.innerHTML=` <tr>
    <th>Product Id</th>
    <th>Product Name</th>
    <th>Product Price</th>
</tr>`; 
    
    for(i=0;i<data.length;i++)
    {
        tData.innerHTML+=`<tr>
        <td>${data[i].Id}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Price}</td>
        </tr>`;
    }
}