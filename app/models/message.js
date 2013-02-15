App.Message = DS.Model.extend({
  timestamp: DS.attr('date'),
  body: DS.attr('string')
});