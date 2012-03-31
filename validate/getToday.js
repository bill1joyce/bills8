function getToday() {
	var months = new Array(12);
	months[0]  = "January";
	months[1]  = "February";
	months[2]  = "March";
	months[3]  = "April";
	months[4]  = "May";
	months[5]  = "June";
	months[6]  = "July";
	months[7]  = "August";
	months[8]  = "September";
	months[9]  = "October";
	months[10] = "November";
	months[11] = "December";

	var days = new Array(7);
	days[0] = "Sunday";
	days[1] = "Monday";
	days[2] = "Tuesday";
	days[3] = "Wednesday";
	days[4] = "Thursday";
	days[5] = "Friday";
	days[6] = "Saturday";
   
	var now = new Date();
	var monthInYearNumber = now.getMonth();
	var monthInYearName = months[monthInYearNumber];
	var monthDay = now.getDate();
	var dayInWeekNumber = now.getDay();
	var dayInWeek = days[dayInWeekNumber];
	var year = now.getYear();
	
	if(year < 2000) { 
		year = year + 1900; 
	}
   
	var dateStr = dayInWeek + ' ' + monthDay + ' ' + monthInYearName + ' ' + year;
	return dateStr;
  }

  function hide(id) {
    document.getElementById(id).style.display = 'none';
  }

  function show(id) {
    document.getElementById(id).style.display = 'block';
  }

//-->