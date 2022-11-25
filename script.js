var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);
    console.log("Name"+" : "+ result[150].name.common," Region"+" : "+ result[150].region," Area"+" : " +result[150].area," Subregion asnbf"+" : " +result[150].subregion);
      
    for(var i=0; i<result.length;i++){
        console.log("Name"+" : "+result[i].name.common," Region"+" : "+result[i].region," Subregion"+" : "+result[i].subregion);
}
}