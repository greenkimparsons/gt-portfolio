function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

(function (a) {
  a.createModal = function (b) {
    defaults = {
      title: "",
      message: "Your Message Goes Here!",
      closeButton: true,
      scrollable: false,
    };
    var b = a.extend({}, defaults, b);
    var c =
      b.scrollable === true
        ? 'style="max-height: 420px;overflow-y: auto;"'
        : "";
    html = '<div class="modal fade" id="myModal">';
    html += '<div class="modal-dialog">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html +=
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    if (b.title.length > 0) {
      html += '<h4 class="modal-title">' + b.title + "</h4>";
    }
    html += "</div>";
    html += '<div class="modal-body" ' + c + ">";
    html += b.message;
    html += "</div>";
    html += '<div class="modal-footer">';
    if (b.closeButton === true) {
      html +=
        '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
    }
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    a("body").prepend(html);
    a("#myModal")
      .modal()
      .on("hidden.bs.modal", function () {
        a(this).remove();
      });
  };
})(jQuery);

/*
 * Here is how you use it
 */
$(function () {
  $(".view-pdf").on("click", function () {
    var pdf_link = $(this).attr("href");
    var iframe =
      '<div class="iframe-container"><iframe src="' +
      pdf_link +
      '"></iframe></div>';
    $.createModal({
      message: iframe,
      closeButton: true,
      scrollable: false,
    });
    return false;
  });
});

$(".view-pdf").modal("show");