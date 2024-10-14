import Tabular from 'meteor/aldeed:tabular';
global.Books = new Mongo.Collection('Books');
export default function() {
        new Tabular.Table({
            name: "Books",
            collection: Books,
            columns: [
                {data: "title", title: "Title"},
                {data: "author", title: "Author"},
                {data: "copies", title: "Copies Available"},
            ],
            buttons: [
                'copy', 'csvHtml5', 'excelHtml5', 'pdfHtml5'
            ],
            layout: {
                topStart: 'buttons',
            }
    })
}
