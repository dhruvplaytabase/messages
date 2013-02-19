App.MessagesController = Ember.ArrayController.extend({
	messageBody: "test",

	add: function() {
		console.log('add pressed: ' + this.get('messageBody'));

        var transaction = App.store.transaction();
        var message = transaction.createRecord(App.Message, { body: this.get('messageBody') });
        transaction.commit();

		this.set('messageBody', "");
	},

	haveMessages: function() {
		return this.get('content.length') > 0;
	}.property('content.@each')
});
