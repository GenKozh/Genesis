//================= External SVG to inline ==================//

jQuery('img.svg').each(function(){
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgURL = $img.attr('src');
  console.log ($img);
  
  jQuery.get(imgURL, function(data) {

      var $svg = jQuery(data).find('svg');
      $svg = $svg.removeAttr('style');
      
      if(imgID == 'heart') {
        $svg = $svg.attr('viewBox', '0 0 60 60');
        $svg = $svg.attr('transform', 'translate(12,15)');
        $svg = $svg.attr('width', '37');
        $svg = $svg.attr('height', '32');
      }
      console.log(imgID);

      if(imgID == 'man') {
        $svg = $svg.attr('viewBox', '0 0 30 50');
        $svg = $svg.attr('width', '200');
        $svg = $svg.attr('height', '50');
      }

      if(imgID == 'woman') {
        $svg = $svg.attr('viewBox', '0 0 20 50');
        $svg = $svg.attr('width', '200');
        $svg = $svg.attr('height', '50');
      }


      
      $img.replaceWith($svg);
  }, 'xml');

});