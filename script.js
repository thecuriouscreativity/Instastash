document.getElementById('download-btn').addEventListener('click', async function() {
    const url = document.getElementById('instagram-url').value;
    
    if (!url) {
        alert('Please enter a valid Instagram post URL');
        return;
    }
    
    try {
        // Example: Replace with actual API call to fetch media
        const response = await fetch(`https://api.example.com/instagram/download?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.success) {
            displayMedia(data.media);
        } else {
            alert('Could not fetch the media. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    }
});

function displayMedia(media) {
    const mediaPreview = document.getElementById('media-preview');
    mediaPreview.innerHTML = ''; // Clear any previous media
    
    if (media.type === 'image') {
        const img = document.createElement('img');
        img.src = media.url;
        mediaPreview.appendChild(img);
    } else if (media.type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.src = media.url;
        mediaPreview.appendChild(video);
    }

    // Add download link
    const downloadLink = document.createElement('a');
    downloadLink.href = media.url;
    downloadLink.download = 'download';
    downloadLink.textContent = 'Download Media';
    mediaPreview.appendChild(downloadLink);
}