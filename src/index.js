getRamenData()
handleForm()

function getRamenData() {
    fetch('http://localhost:3000/ramens')
    .then(r => r.json())
    .then(ramenData => ramenData.forEach(renderRamen))
}

function renderRamen(ramen) {
    const menu = document.getElementById('ramen-menu')
    
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image

    ramenImg.addEventListener('click', (event) => {
        console.log(event)
        
        const detImg = document.querySelector('.detail-image')
        detImg.src = ramen.image

        const detName = document.querySelector('.name')
        detName.innerText = ramen.name

        const detRestaurant = document.querySelector('.restaurant')
        detRestaurant.innerText = ramen.restaurant

        const detRating = document.querySelector('#rating-display')
        detRating.innerText = ramen.rating

        const detComment = document.querySelector('#comment-display')
        detComment.innerText = ramen.comment

    })

    menu.append(ramenImg)
}

function handleForm() {

    const addRamen = document.getElementById('new-ramen')
    
    addRamen.addEventListener('submit', (event) => {
    event.preventDefault()
    
    // IDs from HTML review event.target.[].value
    const newName = event.target["new-name"].value
    const newRestaurant = event.target["new-restaurant"].value
    const newImg = event.target["new-image"].value
    const newRating = event.target["new-rating"].value
    const newComment = event.target["new-comment"].value

    const newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImg,
        rating: newRating,
        comment: newComment
    }
    // calling renderRamen with user inputs from newRamen

    renderRamen(newRamen)
    // form will reset once submitted
    event.target.reset()
    })}