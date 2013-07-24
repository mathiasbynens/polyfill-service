// Window.prototype.Event
(function () {
	Window.prototype.Event = function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var
		event = document.createEvent('Event'),
		bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false,
		cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : true;

		event.initEvent(type, bubbles, cancelable);

		return event;
	};

	Window.prototype.CustomEvent = function Event(type, eventInitDict) {
		var event = new this.Event(type, eventInitDict);

		event.detail = eventInitDict && eventInitDict.detail || {};

		return event;
	};

	window.event = Window.prototype.Event;
})();