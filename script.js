$(document).ready(onReady);



function onReady() {
  
  $('#Generate-btn').on('click', appendDivs)

} // End onReady



function appendDivs() {
  
  $('main').append(`
    <div>test
    </div>
  `)

} // End appendDivs