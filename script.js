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

document.getElementById('downloadfeedback').addEventListener('click', function() {
    const fileUrl = '한토막 피드백 양식 단일화.docx';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '한토막 피드백 양식 단일화.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});