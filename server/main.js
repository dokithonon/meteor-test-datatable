import { Meteor } from 'meteor/meteor';
import createTable from  '../common.js';
createTable();

Meteor.startup(async function() {
  await Books.removeAsync({});
  await Books.insertAsync({
    title: 'title1',
    author: 'a',
    copies: 10,
  })
  await Books.insertAsync({
    title: 'title2',
    author: 'b',
    copies: 50,
  })
  await Books.insertAsync({
    title: 'title3',
    author: 'c',
    copies: 100,
  })
});
