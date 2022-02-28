
// function loadJSON() {
//   var data_file = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
//    var http_request = new XMLHttpRequest();
//    try{
//       // Opera 8.0+, Firefox, Chrome, Safari
//       http_request = new XMLHttpRequest();
//    }catch (e) {
//       // Internet Explorer Browsers
//       try{
//          http_request = new ActiveXObject("Msxml2.XMLHTTP");
		
//       }catch (e) {
	
//          try{
//             http_request = new ActiveXObject("Microsoft.XMLHTTP");
//          }catch (e) {
//             // Something went wrong
//             alert("Your browser broke!");
//             return false;
//          }
		
//       }
//    }

//    http_request.onreadystatechange = function() {

//       if (http_request.readyState == 4  ) {
//          // Javascript function JSON.parse to parse JSON data
//          var jsonObj = JSON.parse(http_request.responseText);

//          // jsonObj variable now contains the data structure and can
//          // be accessed
//          console.log(jsonObj.groups);
//          // forEach(jsonObj.groups as jsonItem){
//          //    document.write(jsonItem.id);
//          // }
//          // document.getElementById("Name").innerHTML = jsonObj.name;
//          // document.getElementById("Country").innerHTML = jsonObj.country;
//       }
//    }

//    http_request.open("GET", data_file, true);
//    http_request.send();
// }
// 
// 
$.getJSON('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json', function(jd)
{
   console.log(jd.groups);
   $.each(jd.groups, function(i, item) {

      $('.row').html('<div class="col-sm-4"><div class="panel panel-primary"><p> Name: ' + jd.groups[i].name + '</p></div></div>');
      
   });

}); 

