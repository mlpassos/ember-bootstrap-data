import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
	  // debugger;
      let $grid = this.$('.isogrid').isotope({
        // options
        itemSelector: '.isoitem',
        layoutMode: 'fitRows'
      });
      $grid.imagesLoaded().progress( function() {
    });  
    }
});