
	
	function show_date_time(){
	window.setTimeout("show_date_time()", 1000);
	BirthDay=new Date("05-19-2022 19:30:00");//建站日期
	today=new Date();
	timeold=(today.getTime()-BirthDay.getTime());
	sectimeold=timeold/1000
	secondsold=Math.floor(sectimeold);
	msPerDay=24*60*60*1000
	e_daysold=timeold/msPerDay
	daysold=Math.floor(e_daysold);
	e_hrsold=(daysold-e_daysold)*-24;
	hrsold=Math.floor(e_hrsold);
	e_minsold=(hrsold-e_hrsold)*-60;
	minsold=Math.floor((hrsold-e_hrsold)*-60);
	seconds=Math.floor((minsold-e_minsold)*-60);
	momk.innerHTML=daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒" ;
	}
	show_date_time();