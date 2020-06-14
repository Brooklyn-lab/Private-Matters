(function ($) {

   let errors = {
      bodyTypeLength: "Please, select more than 3 body types to complete.",
      harColorsNotSelected: "Please select color hair",
   };
   let form = '#customer-information';
   let selectorBodyTypes = 'input[name^="body_type"]';
   let selectorHairColors = 'input[name^="hair_color"]';

   let selectorBodyTypesNext = '#body_types_next';
   let selectorColorHairNext = '#color_hair_next';

   let selectorStartBlock = '.start';
   let selectorAttentionBlock = '.attention';
   let selectorBodyTypesBlock = '.type';
   let selectorColorHairBlock = '.color';

   let selectorColorBody = ".color__body";

   let selectorAgreementYes = '#yes';
   let selectorAgreementNo = '#no';
   let modal = '#my-modal';
   let selectorStart = '#start';

   $(selectorStart).on("click", function () {
      $(selectorStartBlock).hide();
      $(selectorAttentionBlock).show();
   })

   $(selectorAgreementYes).on("click", function () {
      $(selectorAttentionBlock).hide();
      $(selectorBodyTypesBlock).show();
   })

   $(selectorAgreementNo).on("click", function () {
      $(selectorBodyTypesBlock).hide();
      $(selectorStartBlock).show();
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
      if (false === validateBodyTypes()) {
         showMessage(errors.bodyTypeLength);
         return;
      }

      $(selectorBodyTypesBlock).hide();
      $(selectorColorHairBlock).show();
   });

   $(selectorColorHairNext).on('click', function () {
      if (false === validateBodyTypes()
         && false === validateHairColor()) {
         alert('*');
         return;
      }
      $(selectorColorBody).hide();
      $(modal).show();
   });


   $(form).on('submit', function (e) {
      e.preventDefault();
      if (false === validateForm()) {
         return;
      }

      console.log('valid');
      //@todo
   });

})(jQuery);