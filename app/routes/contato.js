import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller) {
		this._super(...arguments);
		controller.setProperties({ 
	      lat: -1.4255971,
	      lng: -48.4570937,
	      zoom: 15,
	      markers: Ember.A([
	        {
	          id: 'unique-id',  // Recommended
	          lat: -1.4255971, // Required
	          lng: -48.4570937, // Required
	          icon: 'http://maps.google.com/mapfiles/ms/icons/red.png',
	          label: '',
	          opacity: .8,
	          optimized: true,
	          // place: new google.maps.MarkerPlace(),
	          position: new google.maps.LatLng(),
	          // shape: new google.maps.MarkerShape(),
	          click: function(event, marker) {
	          	// alert('cliked');
	          },
	          infoWindow: {
	            content: '<div class="text-left">'+
				      '<h4>Secretaria de Comunicação do Estado do Pará</h4>'+
				      '<small>A Secretaria de Estado de Comunicação, é responsável' +
				      ' pela execução centralizada das atividades de jornalismo, comunicação institucional,' +
				      ' novas mídias, relações públicas, pesquisa de opinião, democratização do acesso à informação' +
				      ' e à comunicação, publicidade, propaganda e marketing.</small>' +
				      '</div>',
	            visible: false
	        	},
	          rightclick: function(event, marker) {},
	          dblclick: function(event, marker) {},
	          mouseover: function(event, marker) {},
	          mouseout: function(event, marker) {},
	          mouseup: function(event, marker) {},
	          mousedown: function(event, marker) {},
	          drag: function(event, marker) {},
	          dragstart: function(event, marker) {},
	          dragend: function(event, marker) {},
	          anchorPoint: new google.maps.Point(),
	          animation: google.maps.Animation.DROP,
	          clickable: true,
	          crossOnDrag: true,
	          cursor: 'pointer',
	          draggable: true,
	          title: 'Título da InfoWindow',
	          visible: true,
	          zIndex: 999
	        }
	      ])
	    });
	}
});