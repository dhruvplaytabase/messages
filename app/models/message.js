App.Message = DS.Model.extend({
  timestamp: DS.attr('date'),
  body: DS.attr('string'),

  // example of a property - there are obviously more globalized ways of doing this.
  timestampString: function() {
  	var timestamp = this.get('timestamp');
  	if (!timestamp) return "";

  	var month = timestamp.getMonth() + 1;
  	var minutes = timestamp.getMinutes();
  	if (minutes < 10)
  		minutes = "0" + minutes;

  	return "(" + timestamp.getHours() + ":" + minutes + " " + timestamp.getDate() + "/" + month + "/" + timestamp.getFullYear() + ")";
  }.property('timestamp')

});