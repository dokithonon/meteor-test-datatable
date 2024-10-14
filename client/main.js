import { Template } from 'meteor/templating';
import Tabular from 'meteor/aldeed:tabular';
import '../common.js';
import './main.html';

// initialize DataTables before anything else
import DataTable from 'datatables.net-bs'
import 'datatables.net-bs/css/dataTables.bootstrap.css';

// Buttons Core
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.print';

// init Tabular
Tabular.init({ DataTable })


Template.hello.onCreated(function helloOnCreated() {

});

Template.hello.helpers({
  
});

Template.hello.events({
  
});
