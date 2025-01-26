function toggleBox(box) {
    // Remove the "active" class from all boxes
    const allBoxes = document.querySelectorAll('.info-box');
    allBoxes.forEach(b => b.classList.remove('active'));

    // Add the "active" class to the clicked box
    box.classList.add('active');
}