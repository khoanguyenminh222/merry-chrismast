const video = document.getElementById('video');
const audio = document.getElementById('myAudio');

const loadFaceAPI = async () => {
    
    
    await faceapi.nets.tinyFaceDetector.loadFromUri('/js//models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/js/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/js/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/js/models');

}

function getCameraStream(){
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({ video: {}})
        .then(stream => {
            video.srcObject = stream;
        });
    }
}

video.addEventListener('play', () => {
    
    setInterval(async()=>{
        const detection = await faceapi.detectAllFaces(video,
            new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks
            ().withFaceExpressions()
        console.log(detection);
        if(detection.length>0){
            audio.play();
        }
    }, 100)
})

loadFaceAPI().then(getCameraStream)

