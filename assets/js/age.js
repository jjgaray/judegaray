// JavaScript Document
/*Auto Detect Age in Birthdate*/
function bday()
{
	var year, month, day;
	var num, yeart, montht, dayt;
	var age=0;
	year = document.getElementById('year').value;
	day = document.getElementById('day').value;
	if(document.getElementById('month').value=='January')
	{
		month=0;
	}
	else if(document.getElementById('month').value=='February')
	{
		month=1;
	}
	else if(document.getElementById('month').value=='March')
	{
		month=2;
	}
	else if(document.getElementById('month').value=='April')
	{
		month=3;
	}
	else if(document.getElementById('month').value=='May')
	{
		month=4;
	}
	else if(document.getElementById('month').value=='June')
	{
		month=5;
	}
	else if(document.getElementById('month').value=='July')
	{
		month=6;
	}
	else if(document.getElementById('month').value=='August')
	{
		month=7;
	}
	else if(document.getElementById('month').value=='September')
	{
		month=8;
	}
	else if(document.getElementById('month').value=='October')
	{
		month=9;
	}
	else if(document.getElementById('month').value=='November')
	{
		month=10;
	}
	else if(document.getElementById('month').value=='December')
	{
		month=11;
	}
	num = new Date();
	yeart = num.getFullYear();
	dayt = num.getDate();
	montht = num.getMonth();
	
	if((day==dayt)&&(month==montht))
	{
		age = yeart-year;
	}
	else if((day<dayt)&&(month==montht))
	{
		age = yeart-year;
	}
	else if((day>dayt)&&(month==montht))
	{
		age = yeart-year-1;
	}
	else if((day>dayt)&&(month<montht))
	{
		age = yeart-year;
	}
	else if((day<dayt)&&(month<montht))
	{
		age = yeart-year;
	}
	
	else if((day>dayt)&&(month>montht))
	{
		age = yeart-year-1;
	}
	else if((day<dayt)&&(month>montht))
	{
		age = yeart-year-1;
	}
	
	else
	{
		age = yeart-year-1;
	}
	document.getElementById('age').value=age;
}

// JavaScript Document