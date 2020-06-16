
(function ($) {
   let errors = {
      bodyColorHairLength: "Please select at least 1 body type to complete.",
      bodyTypeLength: "Please select from 1 to 3 body types to complete.",
   };

   let selectorBodyTypes = 'input[name^="body_type"]';
   let selectorHairColors = 'input[name^="hair_color"]';

   let selectorBodyTypesNext = $("#body_types_next");
   let selectorColorHairNext = $("#color_hair_next");

   let selectorStartBlock = $(".start-page");
   let selectorAttentionBlock = $(".warning-page");
   let selectorBodyTypesBlock = $(".body_type-page");
   let selectorColorHairBlock = $(".color_type-page");

   let selectorColorBody = $(".color_type-page__body");

   let selectorAgreementYes = $("#button_yes");
   let selectorAgreementNo = $("#button_no");
   let modal = $("#my-modal");
   let selectorStart = $("#button_start");

   $(selectorStart).on("click", function () {
      selectorStartBlock.hide();
      selectorAttentionBlock.show();
   });

   $(selectorAgreementYes).on("click", function () {
      selectorAttentionBlock.hide();
      selectorBodyTypesBlock.show();
   });

   $(selectorAgreementNo).on("click", function () {
      selectorBodyTypesBlock.hide();
      selectorStartBlock.show();
   });

   function showMessage(text) {
      alert(text);
   }

   function validateBodyTypes() {
      let bodyTypesLength = $(`${selectorBodyTypes}:checked`).length;

      return bodyTypesLength <= 3 ? bodyTypesLength > 0 : false;
   }

   const validateHairColor = () => $(`${selectorHairColors}:checked`).length > 0;

   $(selectorBodyTypesNext).on("click", function () {
      if (!validateBodyTypes()) {
         showMessage(errors.bodyTypeLength);
         return;
      }

      selectorBodyTypesBlock.hide();
      selectorColorHairBlock.show();
   });

   $(selectorColorHairNext).on("click", function () {
      if (!validateBodyTypes() || !validateHairColor()) {
         return;
      }

      selectorColorBody.hide();
      modal.show();
   });

})(jQuery);