/**
 * Created by equitysplit on 3/25/17.
 */
$(document).ready(function () {
    $('table').DataTable();

    // $('#messages_table > tbody > .accordion > .tdvisible').on('click', function(){
    //     $(this).parent().siblings('.hidden-message').toggle();
    //     console.log('drghdrhg');
    // });

    // $(this).on('show.bs.collapse', function () {
    //     // $('.collapse.in').collapse('hide');
    //     $(this).siblings().collapse('hide');
    // });

    // $(this).on('click',".box, .box div", function (e) {
    // $(this).on('click',"tbody, tbody tr", function (e) {
    //     e.stopPropagation();
    //     var message = $(this).siblings('.hidden-message');
    //
    //     if (message.is(":hidden")) {
    //         $('.title_active').removeClass("title_active")
    //             .siblings('.hidden-message').hide();
    //         message.show();
    //         $(this).addClass("title_active");
    //         $(this).parent().addClass("ms_active");
    //     } else {
    //         message.hide();
    //         $(this).removeClass("title_active");
    //     }
    // });
});

// <div class="box">
//     <div  class="title">Title</div>
//     <div  class="dropdown">
//         Content
//     </div> <!-- md -->
// </div> <!-- ms -->

// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "none") {
//             panel.style.display = "block";
//         } else {
//             panel.style.display = "none";
//         }
//     }
// }

