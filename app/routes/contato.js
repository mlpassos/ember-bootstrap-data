import Ember from 'ember';

export default Ember.Route.extend({
	// setupController: function(controller) {
	//     controller.setProperties({ 
	//       lat: 32.75494243654723,
	//       lng: -86.8359375,
	//       zoom: 4
	//     });
	// }
	 setupController(controller) {
		this._super(...arguments);
		controller.setProperties({ 
	      lat: -1.4255971,
	      lng: -48.4570937,
	      zoom: 17
	      // markers: Ember.A([
		  //       {
		  //         id: 'unique-id',        // Recommended
		  //         lat: -1.4255971,
		  //     	  lng: -48.4570937,
		  //         click: function(event, marker) {},
		  //         rightclick: function(event, marker) {},
		  //         dblclick: function(event, marker) {},
		  //         mouseover: function(event, marker) {},
		  //         mouseout: function(event, marker) {},
		  //         mouseup: function(event, marker) {},
		  //         mousedown: function(event, marker) {},
		  //         drag: function(event, marker) {},
		  //         dragstart: function(event, marker) {},
		  //         dragend: function(event, marker) {},
		  //         anchorPoint: new google.maps.Point(),
		  //         animation: google.maps.Animation.DROP,
		  //         attribution: new google.maps.Attribution(),
		  //         clickable: true,
		  //         crossOnDrag: true,
		  //         cursor: 'pointer',
		  //         draggable: true,
		  //         icon: 'beachflag-8f33bab9b0c154462489b35140f29fae.png',
		  //         label: 'A',
		  //         opacity: 0.3,
		  //         optimized: true,
		  //         place: new google.maps.MarkerPlace(),
		  //         position: new google.maps.LatLng(),
		  //         shape: new google.maps.MarkerShape(),
		  //         title: 'string',
		  //         visible: true,
		  //         zIndex: 999
		  //       }
		  // ])
	    });
	    // controller.set('mapLoaded', function(){alert('oi');});
	}
});
