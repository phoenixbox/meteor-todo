Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function(){
      return Tasks.find({});
    },
    players: [
      { name: "Madigan" },
      { name: "Luke" },
      { name: "Carniviore" }
    ]
  });
}