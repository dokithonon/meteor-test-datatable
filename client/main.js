import { Template } from 'meteor/templating';




import createTable from  '../common.js';
import './main.html';


import Tabular from 'meteor/aldeed:tabular'
global.Tabular = Tabular; // To make it available in the chrome console

// Bootstrap Theme
import DataTables from  'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

// Buttons Core
import 'datatables.net-buttons-bs';
// Import whichever buttons you are using
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';

Tabular.init({ DataTables }) // pass DT constructor

createTable();


Template.hello.onCreated(function helloOnCreated() {
  
});

Template.hello.helpers({
  
});

Template.hello.events({
  
});
