// get current date
function get_date(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    d = d>9 ? min : '0' + d;
    h = n.getHours();
    min = n.getMinutes();
    min = min > 9 ? min : '0' + min;
    html_date =  m + "/" + d + "/" + y + ", "+ h + ":" + min;

    return html_date;
  }
  