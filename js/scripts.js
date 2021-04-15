/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

const cells = document.querySelectorAll('td');
let timeTill;

setNewMessageTimer();

// Need to add some messages to the different cells
cells.forEach((cell, index) => {
  var numNewMessages = Math.floor(Math.random() * 4);
  var classes = (0 < numNewMessages) ? 'new-messages' : 'new-messages hidden';
  cell.innerHTML += `
    <span class="${classes}">${numNewMessages}</span>
  `;
});

function setNewMessageTimer () {
  // Generate a random time when the new message appears
  timeTill = Math.floor(Math.random() * 10000);

  setTimeout(function(event) {
    // select random cell
    var cellIndex = Math.floor(Math.random() * 9);
    // get the alert element of the cell
    var cellToModifiy = cells[cellIndex].children[0];
    // Add 1 to the value of the element
    cellToModifiy.innerHTML = parseInt(cellToModifiy.innerHTML) + 1;
    // Make sure cell isn't hidden
    cellToModifiy.classList.remove('hidden');
    // Add the animation class
    cellToModifiy.classList.add('update');
    // Once the animation is complete, remove the class for the animation
    setTimeout(function(e) {
      cellToModifiy.classList.remove('update');
    }, 300 );
    // Set a new timer for the next message
    setNewMessageTimer();
  }, timeTill);
}
