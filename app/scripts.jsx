"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import Swiper from "swiper";
import 'swiper/css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
// All features encapsulated in functions
const initTabs = () => {
  $(".widget-tabs").each(function () {
    $(this).find(".widget-content-tab").children().hide();
    $(this).find(".widget-content-tab").children(".active").show();
    $(this).find(".widget-menu-tab").children(".item-title").on("click", function () {
      const liActive = $(this).index();
      const contentActive = $(this)
        .siblings()
        .removeClass("active")
        .parents(".widget-tabs")
        .find(".widget-content-tab")
        .children()
        .eq(liActive);
      contentActive.addClass("active").fadeIn("slow");
      contentActive.siblings().removeClass("active");
      $(this).addClass("active").parents(".widget-tabs").find(".widget-content-tab").children().eq(liActive).siblings().hide();
    });
  });
};

const initBoxSearch = () => {
  $(document).on("click", (e) => {
    if (e.target.id !== "s") $(".box-content-search").removeClass("active");
  });
  $(".show-search").on("click", (event) => {
    event.stopPropagation();
    $(".box-content-search").addClass("active");
  });
  $(".box-content-search").on("click", (event) => event.stopPropagation());
};

const initBtnFilter = () => {
  $(".btn-filter").on("click", function () {
    const box = $(this).closest(".wg-filter").find(".open-filter");
    const btn = $(this).closest(".wg-filter").find(".btn-filter");
    box.toggleClass("active");
    btn.toggleClass("active");
  });
  $(document).on("click", (e) => {
    if ($(e.target).closest(".wg-filter").length === 0) {
      $(".wg-filter").find(".open-filter").removeClass("active");
      $(".wg-filter").find(".btn-filter").removeClass("active");
    }
  });
};

const initPreloader = () => {
  setTimeout(() => {
    $(".preload-container").fadeOut("slow", function () {
      $(this).remove();
    });
  }, 1500);
};
const initSliders = () => {
    if ($("div").hasClass("slider-box-dream")) {
      new Swiper(".slider-box-dream", {
        spaceBetween: 0,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".box-dream-next",
          prevEl: ".box-dream-prev",
          clickable: true,
        },
        pagination: {
          el: ".box-dream-pagination",
          clickable: true,
        },
      });
    }
  
    if ($("div").hasClass("slider-house-full")) {
      new Swiper(".slider-house-full", {
        spaceBetween: 0,
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".house-full-next",
          prevEl: ".house-full-prev",
          clickable: true,
        },
      });
    }
  
    if ($("div").hasClass("slider-home7")) {
      new Swiper(".slider-home7", {
        spaceBetween: 0,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: ".home7-next",
          prevEl: ".home7-prev",
          clickable: true,
        },
      });
    }
  
    if ($("div").hasClass("slider-property-single-6")) {
      new Swiper(".slider-property-single-6", {
        spaceBetween: 0,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: ".property-single-6-next",
          prevEl: ".property-single-6-prev",
          clickable: true,
        },
      });
    }
  
    if ($("div").hasClass("slider-testimonials")) {
      new Swiper(".slider-testimonials", {
        spaceBetween: 0,
        slidesPerView: 5,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
          clickable: true,
        },
        pagination: {
          el: ".testimonials-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}">${index + 1}</span>`,
        },
      });
    }
  
    if ($("div").hasClass("slider-brand")) {
      new Swiper(".slider-brand", {
        spaceBetween: 30,
        slidesPerView: 2,
        observer: true,
        observeParents: true,
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 10000,
        breakpoints: {
          450: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          868: { slidesPerView: 5, spaceBetween: 30 },
          1400: { slidesPerView: 6, spaceBetween: 171 },
        },
      });
    }
  
    // Add additional Swiper slider initializations here following the same pattern.
  };
  const initCounto = () => {
    (function ($) {
      $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
          var settings = $.extend(
            {},
            $.fn.countTo.defaults,
            {
              from: $(this).data("from"),
              to: $(this).data("to"),
              speed: $(this).data("speed"),
              refreshInterval: $(this).data("refresh-interval"),
              decimals: $(this).data("decimals"),
            },
            options
          );

          var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

          var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data("countTo") || {};

          $self.data("countTo", data);

          if (data.interval) {
            clearInterval(data.interval);
          }
          data.interval = setInterval(updateTimer, settings.refreshInterval);

          render(value);

          function updateTimer() {
            value += increment;
            loopCount++;

            render(value);

            if (typeof settings.onUpdate == "function") {
              settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
              $self.removeData("countTo");
              clearInterval(data.interval);
              value = settings.to;

              if (typeof settings.onComplete == "function") {
                settings.onComplete.call(self, value);
              }
            }
          }

          function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.text(formattedValue);
          }
        });
      };

      $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null,
      };

      function formatter(value, settings) {
        return value.toFixed(settings.decimals);
      }
    })($);

    $('#counter').countTo({
      from: 0,
      to: 100,
      speed: 1500,
      refreshInterval: 50,
      decimals: 0,
      onComplete: function () {
        console.log('Counting complete!');
      }
    });

    return () => {
      clearInterval($('#counter').data('countTo')?.interval);
    };
  };
// Main Scripts Component
const Scripts = () => {
  useEffect(() => {
    // Initialize all functions
    initTabs();
    initBoxSearch();
    initBtnFilter();
    initPreloader();
    initSliders();
    initCounto();

    // Cleanup to prevent memory leaks
    return () => {
      $(".btn-filter").off("click");
      $(".show-search").off("click");
      $(document).off("click");
    };
  }, []); // Runs once on mount

  return null; // This component does not render anything
};

export default Scripts;
