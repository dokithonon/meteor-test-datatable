import { Template } from 'meteor/templating';
import Tabular from 'meteor/aldeed:tabular';
global.Tabular = Tabular; // To make it available in the chrome console


import createTable from  '../common.js';
import './main.html';

import { $ } from 'meteor/jquery';

// Bootstrap Theme
import dataTablesBootstrap from 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

// Buttons Core
//import dataTableButtons from 'datatables.net-buttons-bs';

// Import whichever buttons you are using
//import html5ExportButtons from 'datatables.net-buttons/js/buttons.html5.js';

// Then initialize everything you imported
//dataTablesBootstrap(window, $);
//dataTableButtons(window, $);
//html5ExportButtons(window, $);


Tabular.init();
createTable();


Template.hello.onCreated(function helloOnCreated() {
  
});

Template.hello.helpers({
  
});

Template.hello.events({
  
});
