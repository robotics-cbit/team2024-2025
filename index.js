function showProfiles() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    document.getElementById('background').style.background = 'url("robotics.jpg") no-repeat center center fixed';
    document.getElementById('background').style.backgroundSize = 'cover';
  }

  function back() {
    document.getElementById('page1').style.display = 'block';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('background').style.background = 'url("image3.jpg") no-repeat center center fixed';
    document.getElementById('background').style.backgroundSize = 'cover';
  }

  function showDetails(event, id) {
    event.stopPropagation();
    var achievements = document.getElementById(id).innerHTML;
    document.getElementById('popup_content').innerHTML = achievements;
    document.getElementById('popup').style.display = 'block';
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function showModal(imgId) {
    var imgSrc = document.getElementById(imgId).src;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal').style.display = 'flex';
  }

  function hideModal() {
    document.getElementById('modal').style.display = 'none';
  }