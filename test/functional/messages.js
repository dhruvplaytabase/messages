process.env.NODE_ENV = 'test';

var app = require('../../server'),
	assert = require('assert'),
	config = require('../../config'),
    request = require('request');

describe('messages REST endpoint', function() {

	it('should return all messages json', function(done) {
	    request(config.base_url + '/messages', function(err,resp,body) {
	      assert.equal(resp.statusCode, 200);
	      done(); 
	    });
	});

	it('should create and fetch a message', function(done) {
		request.post(config.base_url + '/messages', 
			{ json: { message: { body: "test" } } }, function(post_err, post_resp, post_body) {
			  assert.equal(post_err, null);
		      assert.equal(post_resp.statusCode, 200);

		      assert.equal(post_body.message.body, "test");

		      request({ url: config.base_url + '/messages/' + post_body.message._id, json: true}, function(get_err, get_resp, get_body) {
		      	assert.equal(get_err, null);
	      	  	assert.equal(get_resp.statusCode, 200);

	      		assert.equal(get_body.message.body, "test");

	      		done(); 
	    	  });
	    });
    }); 

});