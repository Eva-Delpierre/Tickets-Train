const mongoose = require('mongoose');
const dotenv = require('dotenv')

// useNewUrlParser ;)
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true
 };


// --------------------- BDD -----------------------------------------------------
mongoose.connect('mongodb+srv://Eva:TicketTrain@ticket-r9xnt.mongodb.net/ticket?retryWrites=true&w=majority',
   options,
   function(err) {  
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info('*** Connection Database Ticketac : Success ***');
    }
   }
);