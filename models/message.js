var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
    Mixed = Schema.Types.Mixed;

var messageSchema = mongoose.Schema({
	timestamp: { type: Date, default: Date.now },
	body: { type: String }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = {
  Message: Message
}
