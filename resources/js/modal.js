$(function () {
  $(".account-form-modaal").modaal({
    width: 600, height:400,
  });
  $(".account-form-modaal").on("click", () => {
    $(".modaal-container").addClass("rounded");
  });
})
