$(function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:5252/api/hello",
    success: function (data) {
      console.log(data);
      $("#dynamic-content").text(data);
    },
  });
});
