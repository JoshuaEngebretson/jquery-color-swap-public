$(document).ready(onReady);

let DivCount = 0;

function onReady() {
  
  $('#Generate-btn').on('click', appendDivs)

} // End onReady



function appendDivs() {
  
  DivCount += 1

  $('main').append(`
    <div>
      <p>Current Generated Div Count ---> ${DivCount}
    </div>
  `)

} // End appendDivs
