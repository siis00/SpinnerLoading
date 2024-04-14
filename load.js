 $('body').append(`
  <div class="loading-state">
    <div id="loading-spinner">
      <div class="spinner outer">
          <div class="spinner inner">
              <div class="spinner eye">
              </div>
          </div>
      </div>
      <div id="loading-text">KruChian</div>
    </div>
  </div>`);
  $(window).on('load', function(){
    setTimeout(removeLoader, 3000); //wait for page load PLUS two seconds.
  });

  function removeLoader(){
    $( ".loading-state" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".loading-state" ).remove(); //makes page more lightweight 
      document.querySelector(".wrapper").style.display = 'flex'
    });  
  }

  function addLoader(){
    $('body').append(`
      <div class="loading-state">
        <div id="loading-spinner">
          <div class="spinner outer">
              <div class="spinner inner">
                  <div class="spinner eye">
                  </div>
              </div>
          </div>
          <div id="loading-text">KruChian</div>
        </div>
      </div>`);
   document.querySelector(".wrapper").style.display = 'none'
  }
