Webcam.set({

    width: 500,
    height: 375,
    image_format: 'png',
    png_quality: 100
});
Webcam.attach('WebCam');

function Picture() {
    Webcam.snap(function(Snap) {
        document.getElementById("Pic").innerHTML = '<img id = "UserPic" src = "' + Snap + '">';
        console.log("done!");
    });

    Check();
}

console.log("Version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GJpAYfirT/model.json', Status);

function Status() {
    console.log("model success");
}

function Check() {
    var Image = document.getElementById("UserPic");
    classifier.classify(Image,ReportCard);
}

function ReportCard(error,report){
if (error){
    console.error(error);
}
else{
    document.getElementById("Person").innerHTML = report[0].label;
    document.getElementById("Percent").innerHTML = report[0].confidence.toFixed(3);
}
}