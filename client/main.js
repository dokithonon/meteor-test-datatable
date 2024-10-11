import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../common.js';
import './main.html';

import { $ } from 'meteor/jquery';

// Bootstrap Theme
import dataTablesBootstrap from 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

// Buttons Core
import dataTableButtons from 'datatables.net-buttons-bs';

// Import whichever buttons you are using
import html5ExportButtons from 'datatables.net-buttons/js/buttons.html5.js';

// Then initialize everything you imported
dataTablesBootstrap(window, $);
dataTableButtons(window, $);
html5ExportButtons(window, $);


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
