// make some fries
const pile = new Fries('onion rings');

// set up reset button
document.querySelector('#reset').addEventListener('click', () => {
    const remove = confirm('Are you sure you want to clear all your fries?');
    if (!remove) return;

    pile.clear();
    pile.redraw();
});