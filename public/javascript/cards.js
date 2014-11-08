// constructor method for a card. this grabs all of the information from the
function Card(element){
  this.element = element;
}

Card.prototype = {
  template: _.template($("#card-template").html()),

  // function for rendering the cards
  render: function(){
    console.log(' view:render', this);
    var temp = this.template({element: this.element});
    this.$element = $(temp);
    // makes each card draggable
    this.$element.draggable({
      snap: '.box',
      revert: true,
      snapMode: 'inner',
      stack: '.card',
    });
    return this;
  },

  init: function(){
    var view = this;
    if (!this.$element){
      view.render();
      $("#deck").append(view.$element);
    }
  },
};
