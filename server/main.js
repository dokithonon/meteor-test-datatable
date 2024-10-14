import { Meteor } from 'meteor/meteor';
import createTable from  '../common.js';
createTable();

Meteor.startup(async function() {
  await Books.removeAsync({});
  await Books.insertAsync({
    title: 'title1',
  })
  await Books.insertAsync({
    title: 'title2',
  })
  await Books.insertAsync({
    title: 'title3',
  })
});
