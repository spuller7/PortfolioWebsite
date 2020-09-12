import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import sal from 'sal.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


mobileNav();
$(window).on('resize', function() {
  mobileNav();
});

// Window Resize Mobile Menu Fix
function mobileNav() {
  var width = $(window).width();
  $('.submenu').on('click', function() {
    if(width < 767) {
      $('.submenu ul').removeClass('active');
      $(this).find('ul').toggleClass('active');
    }
  });
}

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
      menu = target;
       var target = $(this.hash);
      $('html, body').stop().animate({
          scrollTop: (target.offset().top) - 79
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}

if($('.menu-trigger').length){
  $(".menu-trigger").on('click', function() {	
    $(this).toggleClass('active');
    $('header .Navigation').slideToggle(200);
  });
}

sal();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
