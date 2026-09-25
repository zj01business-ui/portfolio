// JavaScript
var currentImageIndex = 0;

function openPopup() {
    try {
        currentImageIndex = 0;
        loadNextImage();
        document.getElementById("popup-container").style.display = "flex";
        document.getElementById("CASE2").classList.add("popup-opened");
    } catch (error) {
        console.error("Error in openPopup function:", error);
    }
}

function closePopup() {
    try {
        document.getElementById("popup-container").style.display = "none";
        document.getElementById("CASE2").classList.remove("popup-opened");
    } catch (error) {
        console.error("Error in closePopup function:", error);
    }
}

function loadNextImage(event) {
    try {
        var imageSrc = getImageSourceByIndex(currentImageIndex);
        if (imageSrc) {
            console.log("Loading next image:", imageSrc);
            document.getElementById("popup-image").src = imageSrc;
            currentImageIndex++;
        }
        event.stopPropagation(); // Prevent propagation only when "Next" button is clicked
    } catch (error) {
        console.error("Error in loadNextImage function:", error);
    }
}

function getImageSourceByIndex(index) {
    var imageSources = [
        "Assets/HIDDEN_FEATURE_PAGE(MOODBOARD).png",
        "Assets/HIDDEN_FEATURE_PAGE(HOME).png",
        "Assets/HIDDEN_FEATURE_PAGE(MENU).png",
        "Assets/HIDDEN_FEATURE_PAGE(STORES).png",
        "Assets/HIDDEN_FEATURE_PAGE(CONTACT).png",

    ];

    if (index >= 0 && index < imageSources.length) {
        return imageSources[index];
    } else {
        return null;
    }
}

// Prevent propagation of click events from the popup container to its children
document.getElementById("popup-container").addEventListener("click", function (event) {
    event.stopPropagation();
});

function goToHomePage() {
    window.location.href = 'index.html';
}

// video
function playVideo() {
    var video = document.getElementById('myVideo');
    var case5 = document.getElementById('CASE5');
    var hoverWords = document.querySelector('#CASE5 .popup-words');
    var continueText = document.querySelector('#CASE5 .continue-text');

    if (video.paused) {
        video.style.display = 'block';
        video.currentTime = 200;
        video.play();
        case5.classList.add('video-playing');
        setContinueText(''); // Hide the "Continue?" text during video play
    } else {
        video.pause();
        case5.classList.remove('video-playing');
        setHoverWords('Continue?');
        setContinueText('');
    }
}

function setHoverWords(words) {
    var hoverWords = document.querySelector('#CASE5 .popup-words');
    hoverWords.textContent = words;
}

function setContinueText(text) {
    var continueText = document.querySelector('#CASE5 .continue-text');
    continueText.textContent = text;
    console.log("Setting continue text:", text);
}

video.addEventListener('click', function() {
    var case5 = document.getElementById('CASE5');
    setHoverWords('Different pop-up words go here when video is paused.');

    if (!video.paused) {
        video.pause();
        case5.classList.remove('video-playing');
        setContinueText('Continue?');
    }
});

video.addEventListener('ended', function() {
    var case5 = document.getElementById('CASE5');
    setHoverWords('Different pop-up words go here when video has ended.');
    case5.classList.remove('video-playing');
    setContinueText('');
});



// for FORM1
function showTextarea() {
    document.getElementById('portfolioSuggestionsContainer').style.display = 'block';
}
function hideTextarea() {
    document.getElementById('portfolioSuggestionsContainer').style.display = 'none';
}
function toggleContactPreference() {
    var container = document.getElementById('contactPreferenceContainer');
    var yesRadio = document.getElementById('contactBackYes');
    container.style.display = yesRadio.checked ? 'block' : 'none';

    var selectField = document.getElementById('contactPreference');
    selectField.required = yesRadio.checked;
}

function toggleAdditionalFields() {
    var relationshipDropdown = document.getElementById('relationship');
    var dobField = document.getElementById('dobField');
    var interestColorField = document.getElementById('interestColorField');
    var raceField = document.getElementById('raceField');
    var addressFieldLabel = document.querySelector('label[for="address"]');
    var addressField = document.getElementById('address');
    var companyFieldLabel = document.querySelector('label[for="Company"]');
    var companyField = document.getElementById('Company');

    if (relationshipDropdown.value === 'lecturer' || relationshipDropdown.value === 'employer') {
        dobField.style.display = 'none';
        interestColorField.style.display = 'none';
        raceField.style.display = 'none';
        addressFieldLabel.style.display = 'none';
        addressField.style.display = 'none';
        companyFieldLabel.style.display = 'block';
        companyField.style.display = 'block';
    } else if (relationshipDropdown.value === 'friends' || relationshipDropdown.value === 'public') {
        dobField.style.display = 'block';
        interestColorField.style.display = 'block';
        raceField.style.display = 'block';
        addressFieldLabel.style.display = 'block';
        addressField.style.display = 'block';
        companyFieldLabel.style.display = 'none';
        companyField.style.display = 'none';
    } else {
        dobField.style.display = 'block';
        interestColorField.style.display = 'block';
        raceField.style.display = 'block';
        addressFieldLabel.style.display = 'block';
        addressField.style.display = 'block';
        companyFieldLabel.style.display = 'block';
        companyField.style.display = 'block';
    }
}

