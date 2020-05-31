var dateFormat = function(date){

    var newDate = new Date(date);
    var format =  newDate.getMonth()+ 1 + '/'+ newDate.getDate() + '/'  + newDate.getFullYear();
    return format

}

module.exports = dateFormat