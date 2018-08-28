function loadCurrency(){
	var from=document.getElementById('from');
	var to=document.getElementById('to');
	var xapi=new XMLHttpRequest();
	xapi.onreadystatechange=function()
	{
	if(xapi.readyState==4 && xapi.status==200){
		var obj=JSON.parse(this.responseText);
		var options='';
		for(key in obj.rates){
			options=options+'<options>'+key+'</option>';
			}
		from.innerHTML=options;
		to.innerHTML=options;
		}
	}
	xapi.open('GET','http://hnbex.eu/api/v1/rates/daily/',true);
	xapi.send();
}
function convertCurrency(){
	var from=document.getElementById('from').value;
	var to=document.getElementById('to').value;
	var amount=document.getElementById('upis1').value;
	var result=document.getElementById('result');
	if(from.length > 0 && to.length > 0 && amount.length > 0){
		var xapi=new XMLHttpRequest();
		xapi.onreadystatechange=function(){
			var obj=JSON.parse(this.responseText);
			var fact=obj.rates[to];
			if(xapi.readyState==4 && xapi.status==200){
			  result.innerHTML=parseFloat(amount)*parseFloat(fact;)
			}
		}
	}
	xapi.open('GET','http://hnbex.eu/api/v1/rates/daily/'+from+'&symbols='+to,true);
	xapi.send();
}
