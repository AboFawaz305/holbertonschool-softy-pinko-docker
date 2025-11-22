$(function () {
  $.ajax({
    type: "GET",
    url: "/api/hello",
    success: function (data) {
      console.log(data);
      $("#dynamic-content").text(data);
    },
  });
});
