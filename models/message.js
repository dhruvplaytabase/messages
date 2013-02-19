var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
	timestamp: { type: Date, default: Date.now },
	body: { type: String }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = {
  Message: Message
}
