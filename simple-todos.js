Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function(){
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  // In the client code, below everything else
  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },

    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });

  Template.body.events({
    'click .title': function (event) {
      debugger
    },
    'submit .new-task': function (event) {
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      event.target.text.value = "";

      // Have to return False
      return false;
    }
  });
}