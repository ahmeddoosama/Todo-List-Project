// Variable
let inputBtn = document.querySelector('#inp1');
let addBtn = document.querySelector('.btn-add');
let list = document.querySelector('.list');

addBtn.addEventListener('click', _ => {

    // Check btn does it have a value or not?
    if (inputBtn.value == '') {
        event.stopPropagation();
    } else {
        let oldItem = document.querySelector('.noItems');
        if (document.body.contains(oldItem)) {
            oldItem.remove()
        }

        // Create Elements
        let newItem = document.createElement('p')
        let closeBtn = document.createElement('span')
        let closeIcon = document.createTextNode('\u00D7')

        // Add value to Item
        newItem.append(inputBtn.value)

        list.appendChild(newItem)

        closeBtn.className = 'close-btn'
        closeBtn.appendChild(closeIcon)
        newItem.appendChild(closeBtn)

        inputBtn.value = ''
    }
})

// Add Event to closeBtn
document.addEventListener('click', (e) => {
    if (e.target.className == 'close-btn') {
        e.target.parentNode.remove()
    }
    if (list.childElementCount == 0) {
        noItem()
    }
})

// Create no items
function noItem() {
    // Create Element
    let newItem = document.createElement('p')
    let text = document.createTextNode('No Items')

    // Add Class
    newItem.className = 'noItems'

    newItem.appendChild(text)
    list.appendChild(newItem)
}