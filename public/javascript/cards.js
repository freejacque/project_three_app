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
    name = this.element.compoundName;
    // makes each card draggable
    this.$element.draggable({
      // will snap to any boxes
      snap: '.box',
      // reverts to original spot if released
      revert: true,
      // cards will snap to the inner area of the box
      snapMode: 'inner',
      // made new card stack on top of other cards, can probably delete this
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

  rulesInit: function(){
    var view = this;
    if (!this.$element){
      view.render();
      $demoCardUl.append(view.$element);
    }
  },
};
