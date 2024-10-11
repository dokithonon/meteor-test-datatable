import { Meteor } from 'meteor/meteor';
import '../common.js';
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
