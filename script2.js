//customer - name; first and last 
//customer - email address
//customer - location; street, city, state, postcode
//  state converted using the nameToAbbr function
//customer - DOB 
//  use moment.js to convert 
//customer - registered 
//  use moment.js to convert 

const database = document.querySelector('#customers')
  function renderProfiles () {
      for (let customer of customers) {
          const profile = document.createElement('div')
          profile.classList.add('thumbnails')

          const profilePic = document.createElement('img')
          profilePic.src = customer.picture.large
          profile.appendChild(profilePic)
      
          database.appendChild(profile)
        }
  
  }
  renderProfiles()
