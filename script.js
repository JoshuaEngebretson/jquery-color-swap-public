$(document).ready(onReady);

let DivCount = 0;

function onReady() {
  
  $('#Generate-btn').on('click', appendDivs)
  
  $('main').on('click', '.Yellow-btn', changeToYellow)

  $('main').on('click', '.Delete-btn', deleteDivElement)

} // End onReady



function appendDivs() {
  
  DivCount += 1

  $('main').append(`
    <div class="Generated-Div">
      <p>Current Generated Div Count ---> ${DivCount}</p>
      <button class="Yellow-btn">Yellow</button>
      <button class="Delete-btn">Delete</button>
    </div>
  `)

} // End appendDivs



function changeToYellow() {

  console.log('in changeToYellow');

  $(this).parent().addClass('Yellowed-Div').removeClass('Generated-Div')

} // End changeToYellow



function deleteDivElement() {

  console.log('in deleteDivElement');

  $(this).parent().remove()

} // End deleteDivElement