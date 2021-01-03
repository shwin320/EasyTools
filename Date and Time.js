var getTime = function(){
	var time = new Date();
	var sec = time.getSeconds();
	sec = sec.toString();
	sec = sec.padStart(2, "0");
	var min = time.getMinutes();
	min = min.toString();
	min = min.padStart(2, "0");
	var hr = time.getHours();
	var am_pm = "";
	if (hr == 0){
		hr = 12;
		am_pm = "AM";
	} else if (hr > 0 && hr < 12){
		am_pm = "AM";
	} else if (hr == 12){
		am_pm = "PM";
	} else if (hr == 13){
		hr = 1;
		am_pm = "PM";
	} else if (hr == 14){
		hr = 2;
		am_pm = "PM";
	} else if (hr == 15){
		hr = 3;
		am_pm = "PM";
	} else if (hr == 16){
		hr = 4;
		am_pm = "PM";
	} else if (hr == 17){
		hr = 5;
		am_pm = "PM";
	} else if (hr == 18){
		hr = 6;
		am_pm = "PM";
	} else if (hr == 19){
		hr = 7;
		am_pm = "PM";
	} else if (hr == 20){
		hr = 8;
		am_pm = "PM";
	} else if (hr == 21){
		hr = 9;
		am_pm = "PM";
	} else if (hr == 22){
		hr = 10;
		am_pm = "PM";
	} else if (hr == 23){
		hr = 11;
		am_pm = "PM";
	}
	hr = hr.toString();
	hr = hr.padStart(2, "0");
	var mon = time.getMonth();
	if (mon == 0){
		mon = "January";
	} else if (mon == 1){
		mon = "February";
	} else if (mon == 2){
		mon = "March";
	} else if (mon == 3){
		mon = "April";
	} else if (mon == 4){
		mon = "May";
	} else if (mon == 5){
		mon = "June";
	} else if (mon == 6){
		mon = "July";
	} else if (mon == 7){
		mon = "August";
	} else if (mon == 8){
		mon = "September";
	} else if (mon == 9){
		mon = "October";
	} else if (mon == 10){
		mon = "November";
	} else if (mon == 11){
		mon = "December";
	}
	var day = time.getDay();
	if (day == 0){
		day = "Sunday";
	} else if (day == 1){
		day = "Monday";
	} else if (day == 2){
		day = "Tuesday";
	} else if (day == 3){
		day = "Wednesday";
	} else if (day == 4){
		day = "Thursday";
	} else if (day == 5){
		day = "Friday";
	} else if (day == 6){
		day = "Saturday";
	}
	var date = time.getDate();
	var st_nd_th = "";
	if(date == 1 || date == 21 || date == 31){
		st_nd_th = "st";
	} else if(date == 2 || date == 22){
		st_nd_th = "nd";
	} else if(date == 3 || date == 23){
		st_nd_th = "rd";
	} else {
		st_nd_th = "th";
	}
	date = date.toString();
	var year = time.getFullYear();
	year = year.toString();
	return {
		second: sec,
		minute: min,
		hour: hr,
		day_night: am_pm,
		day: day,
		date: date,
		dateOrdinalSuffix: st_nd_th,
		month: mon,
		year: year
	};
};