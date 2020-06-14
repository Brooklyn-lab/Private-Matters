jQuery('#start').click(function () {
   console.log('*');
});

(function ($) {

   let errors = {
      bodyTypeLength: "Please, select more than 3 body types to complete.",
      harColorsNotSelected: "Please select color hair",
   };
   let form = '#customer-information';
   let selectorBodyTypes = 'input[name^="body_type"]';
   let selectorHairColors = 'input[name^="hair_color"]';
   let selectorStart = '#start';
   let selectorStartPage = '.start';
   let selectorAttentionPage = '.attention';
   let selectorAgreementYes = '#yes';
   let selectorAgreementNo = '#no';
   let selectorTypePage = '.type';
   let selectorBodyTypesNext = '#body_types_next';
   let selectorColorHairNext = '#color_hair_next';
   let modal = '#my-modal';

   $('#body_types_next').click(function () {
      console.log('*');
   });

   $(selectorStart).on("click", function () {
      $(selectorStartPage).hide();
      $(selectorAttentionPage).show();
   })

   $(selectorAgreementYes).on("click", function () {
      $(selectorAttentionPage).hide();
      $(selectorTypePage).show();
   })

   $(selectorAgreementNo).on("click", function () {
      $(selectorAttentionPage).hide();
      $(selectorStartPage).show();
   })

   function showMessage(text) {
      alert(text);
   }

   function validateBodyTypes() {
      return $(selectorBodyTypes + ':checked').length > 2
   }

   function validateHairColor() {
      return $(selectorHairColors + ':checked').length > 0
   }

   function validateForm() {
      if (false === validateBodyTypes()) {
         showMessage(errors.bodyTypeLength);
         return false;
      }
      if (false === validateHairColor()) {
         showMessage(errors.harColorsNotSelected);
         return false;
      }

      return true;
   }

   $(selectorBodyTypesNext).on('click', function () {
      console.log('1');
      // if (false === validateBodyTypes()) {
      //    console.log('2');
      //    //show message in current section
      //    return;
      // }
      // console.log(3);


      $(selectorBodyTypes).hide();
      $(selectorColorHairNext).show();
   });

   $(selectorColorHairNext).on('click', function () {
      if (false === validateBodyTypes()
         && false === validateHairColor()) {
         //show message in current section
         return;
      }

      $(selectorColorHairNext).hide();
      $(modal).show();
   });


   $(form).on('submit', function (e) {
      console.log('312312');
      e.preventDefault();
      if (false === validateForm()) {
         return;
      }

      //@todo
   });

})(jQuery);