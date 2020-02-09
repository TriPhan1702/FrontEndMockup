$(document).ready(function () {
  // SideNav Button Initialization
  $(".button-collapse").sideNav({
    slim: true
  });

  // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(sideNavScrollbar);

  //Intitiate Datatable
  $('#dtBasicExample').DataTable({
    "searching": false // false to disable search (or any other option)
  });
  $('.dataTables_length').addClass('bs-select');
  
  $('.mdb-select').materialSelect();

  //Stop carousels from auto changing
  $('.carousel').carousel('pause');

  
});



