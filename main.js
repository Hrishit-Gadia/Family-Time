Webcam.set({

    width: 825,
    height: 500,
    image_format: 'png',
    png_quality: 100
});
Webcam.attach('user');

function Snap() {
    Webcam.snap(function(Source) {
        document.getElementById("Pic").innerHTML = '<img id = "Picture" src = "' + Source + '">';
        console.log("done!");
    });

    Check();
}

console.log("Version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GJpAYfirT/model.json', Status);

function Status() {
    console.log("Model Success");
}

function Check() {
    var Image = document.getElementById("Picture");
    classifier.classify(Image,Card);
}

function Card (error,report){
if (error){
    console.error(error);
}
else{
    document.getElementById("person").innerHTML = report[0].label;
    document.getElementById("Percent").innerHTML = report[0].confidence.toFixed(3);
}
}