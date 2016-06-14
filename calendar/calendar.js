/**
 * Created by conghoan on 04/06/2016.
 */
var monthnames = new Array("January","Februrary","March","April","May", "June","July","August","September","October","November","Decemeber");
var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var todayDate = new Date();
var now = new Date();
display();
function calendar(i){
    todayDate.setDate(1);
    todayDate.setMonth(todayDate.getMonth() + i);
    display();
}
function display(){
    var thisday=todayDate.getDay();
    var thisMonth=todayDate.getMonth();
    var thisDate=todayDate.getDate();
    var thisYear=todayDate.getFullYear();
    var notDate=thisDate;
    var first_date = new Date(thisYear, thisMonth, 1);
    var first_day = first_date.getDay();
    var now = new Date();
    var nowDate = now.getDate();
    var nowMounth = now.getMonth();
    var nowYear = now.getFullYear();
    var html = "";
    title = monthnames[thisMonth] + ' ' + thisYear;
    document.getElementById('title').innerHTML = title;
    html += "<table>";
    html += '<tr><td><b>Su</b></td><td><b>M</b></td><td><b>Tu</b></td><td><b>W</b></td><td><b>Th</b></td><td><b>F</b></td><td><b>Sa</b></td></tr>';
    html += "<tr>";
    for (s = 0; s < first_day; s++) {
        html +="<td>&nbsp</td>";
    }
    date=1;
    while (date <= monthDays[thisMonth])
    {
        for (i = first_day;i<7;i++)
        {
            if (date <= monthDays[thisMonth]){
                if(nowDate == date && nowMounth == thisMonth && nowYear == thisYear){
                    html +='<td id = "nowDate"><b>' + date + '</b></td>';
                }else{
                    html +='<td class = "date">' + date + '</td>';
                }
            }
            else{
                html +="&nbsp";
            }
            date++;
        }
        html +="</tr>";
        first_day=0;
    }
    html +="</table></p>";
    document.getElementById('show').innerHTML = html;
}