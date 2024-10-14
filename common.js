import Tabular from 'meteor/aldeed:tabular';
Books = new Mongo.Collection('Books');
export default function() {
        console.log('createTable is running ...')
        new Tabular.Table({
            name: "Books",
            collection: Books,
            columns: [
                {data: "title", title: "Title"},
                {data: "author", title: "Author"},
                {data: "copies", title: "Copies Available"},
            ],
            //buttons: ['copy', 'excel', 'csv'],
    });
}
