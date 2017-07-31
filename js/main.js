// (function() {
//   /**
//    * Video element
//    * @type {HTMLElement}
//    */
//   var video = document.getElementById("my-video");
//
//   /**
//    * Check if video can play, and play it
//    */
//   video.addEventListener( "canplay", function() {
//     video.play();
//   });
// })();

// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();
  var newHeight = $(window).height(); //new, added for logo
  var halfHeight = newHeight/2;

  //make sure logo stays where it should be
  $('.logo-wrapper').css("height", newHeight);
  $('.logo').css("top", halfHeight);

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();


// Video controls

$(window).load(function() {
  var video = document.getElementById("video");
  video.paused = false;

  var height = $(window).height();
  var half = height/2;
  // $('.logo-wrapper').css("height", height);
  $('.logo').css("top", half);

  // Buttons
  // var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");

  // Event listener for the play/pause button
  // playButton.addEventListener("click", function() {
  //   if (video.paused == true) {
  //     // Play the video
  //     video.play();
  //
  //     // Update the button text to 'Pause'
  //     playButton.innerHTML = "Pause";
  //   } else {
  //     // Pause the video
  //     video.pause();
  //
  //     // Update the button text to 'Play'
  //     playButton.innerHTML = "Play";
  //   }
  // });

  // Event listener for the mute button
  muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;

    // Update the button text
    muteButton.innerHTML = "Unmute";
  } else {
    // Unmute the video
    video.muted = false;

    // Update the button text
    muteButton.innerHTML = "Mute";
  }
  });

});

$(document).ready(function() {
  // $('.logo').css({
  //   "display" : 'block'
  // });
  $('input[type=checkbox]').click(function() {
    if ($(this).is(':checked')) {
      console.log("checked!")
      $('.read-more-wrap').css({
        "margin-top" : 0
      });
    } else {
      console.log("unchecked!")
      $('.read-more-wrap').css({

        "margin-top" : -500

      });

    }


  });
});

// window.onload = function() {
//
//   // Video
//   var video = document.getElementById("video");
//   video.paused = false;
//
//   // Buttons
//   var playButton = document.getElementById("play-pause");
//   var muteButton = document.getElementById("mute");
//
// }
