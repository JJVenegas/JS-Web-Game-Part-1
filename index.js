function createImage(src, position, left, bottom) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = position;
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
    return image

}

function newItem(src, position, left, bottom) {
    let image = createImage(src, position, left, bottom)

    image.addEventListener('dblclick', () => {
        image.remove()
    });

}

createImage('assets/green-character.gif', 'fixed', '100px', '100px');
createImage('assets/pine-tree.png', 'fixed', '450px', '200px');
createImage('assets/tree.png', 'fixed', '200px', '300px');
createImage('assets/pillar.png', 'fixed', '350px', '100px');
createImage('assets/crate.png', 'fixed', '150px', '200px');
createImage('assets/well.png', 'fixed', '500px', '425px');


newItem('assets/sword.png', 'fixed', '500px', '405px');
newItem('assets/shield.png', 'fixed', '165px', '100px');
newItem('assets/staff.png', 'fixed', '600px', '100px');


