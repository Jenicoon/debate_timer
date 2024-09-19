document.getElementById('showImageButton').onclick = function() {
    document.getElementById('imagePopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};

document.getElementById('closePopup').onclick = function() {
    document.getElementById('imagePopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};


document.getElementById('overlay').onclick = function() {
    document.getElementById('imagePopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

document.getElementById('updatelog').onclick = function() {
    document.getElementById('openlog').style.display = 'block';
    document.getElementById('overlaylog').style.display = 'block';
};

document.getElementById('closelog').onclick = function() {
    document.getElementById('openlog').style.display = 'none';
    document.getElementById('overlaylog').style.display = 'none';
};


document.getElementById('overlaylog').onclick = function() {
    document.getElementById('openlog').style.display = 'none';
    document.getElementById('overlaylog').style.display = 'none';
};