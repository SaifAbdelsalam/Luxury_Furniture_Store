document.addEventListener('DOMContentLoaded', function () {
    // Function to create the popup and show the full text of the clicked service
    function showFullText(serviceId) {
      const fullTextElement = document.querySelector(`#${serviceId} .full-description`);
      const fullText = fullTextElement ? fullTextElement.innerHTML : '';
      
      // Create a popup container
      const popup = document.createElement('div');
      popup.classList.add('popup');
      
      // Create the popup content
      const popupContent = document.createElement('div');
      popupContent.classList.add('popup-content');
      popupContent.innerHTML = `
        <div class="popup-header">
          <span class="close-popup">&times;</span>
          <h2>Service Details</h2>
        </div>
        <div class="popup-body">
          <p>${fullText}</p>
        </div>
      `;
      
      // Append the content to the popup container
      popup.appendChild(popupContent);
      
      // Append the popup to the body
      document.body.appendChild(popup);
      
      // Close popup functionality
      const closePopup = popup.querySelector('.close-popup');
      closePopup.addEventListener('click', function () {
        document.body.removeChild(popup);
      });
      
      // Ensure that clicking anywhere outside the popup content also closes it
      window.addEventListener('click', function (event) {
        if (event.target === popup) {
          document.body.removeChild(popup);
        }
      });
    }
    
    // Add event listeners to each "Read More" link
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        const serviceId = link.closest('.col-lg-3').querySelector('.furnitures_text').innerText.trim().toLowerCase().replace(/ /g, '-');
        showFullText(serviceId);
      });
    });
  });
  