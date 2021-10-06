document.addEventListener("DOMContentLoaded", function(){
    // Set the date we're counting down to
    var countDownDate = new Date();
    countDownDate = countDownDate.setMonth(countDownDate.getMonth() + 1);
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get todays date and time
      var now = new Date().getTime();
    
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in an element with id="demo"
      document.getElementById("counter").innerHTML = days + "D " + hours + "H "
      + minutes + "M " + seconds + "S ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
      }
    }, 1000);

      setInterval(function () {
          $('.text_info').fadeOut(300, function () {
              var $this = $(this);
              var $text1 = "Wednesday, 18 December 2021";
              var $text2 = "On 09.00 – 17.00 UTC+7";
              var $text3 = "Conducted at THE DJAKARTA THEATER, Central Jakarta - Indonesia";
              var $text4 = "Audience : Government Official, Foreign and Domestic Investor, SOEs, SMEs";
              $this.text($this.text() == $text1 ? $text2 : $this.text() == $text2 ? $text3 : $this.text() == $text3 ? $text4 : $text1);
              $this.toggleClass('first second');
              $this.fadeIn(500);
          });
      }, 3500);

      mapboxgl.accessToken = 'pk.eyJ1Ijoicmlkd2FuemFsIiwiYSI6ImNrNm40eHhjbzBxeWgzbGxpOTQxaDc2M2YifQ.ZVNP3qVSYcigz6h4ll0Erg';
      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-77.04, 38.907],
          zoom: 11.15
      });
});