(function ($) {
   let errors = {
      bodyColorHairLength: "Please select at least 1 body type to complete.",
      bodyTypeLength: "Please select from 1 to 3 body types to complete.",
   };

   let selectorBodyTypes = 'input[name^="body_type"]';
   let selectorHairColors = 'input[name^="hair_color"]';

   let selectorStartBlock = $(".startPage");
   let selectorAttentionBlock = $(".warningPage");
   let selectorBodyTypesBlock = $(".bodyTypePage");
   let selectorColorHairBlock = $(".colorTypePage");

   let selectorStart = $("#buttonStart");
   let selectorAgreementYes = $("#buttonYes");
   let selectorAgreementNo = $("#buttonNo");
   let selectorBodyTypesNext = $("#bodyTypesNext");
   let selectorColorHairNext = $("#colorHairNext");

   let selectorColorBody = $(".colorTypePage__body");
   let modal = $("#my-modal");


   $(selectorStart).on("click", function () {
      selectorStartBlock.removeClass("active");
      selectorAttentionBlock.addClass("active");
   });

   $(selectorAgreementYes).on("click", function () {
      selectorAttentionBlock.removeClass("active");
      selectorBodyTypesBlock.addClass("active");
   });

   $(selectorAgreementNo).on("click", function () {
      selectorAttentionBlock.removeClass("active");
      selectorStartBlock.addClass("active");
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

      selectorBodyTypesBlock.removeClass("active");
      selectorColorHairBlock.addClass("active");
   });

   $(selectorColorHairNext).on("click", function () {
      if (!validateBodyTypes() || !validateHairColor()) {
         showMessage(errors.bodyColorHairLength);
         return;
      }

      selectorColorBody.hide();
      modal.addClass("active");
   });

})(jQuery);