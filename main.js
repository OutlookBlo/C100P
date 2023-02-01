var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;

console.log(Content);
if(Content =="selfie")
{
  console.log("taking selfie --- ");
  speak();
}}



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your first Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
        take_snapshot("result1");
        save();
    }, 5000);
    
    setTimeout(function()
    {
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    {
        take_snapshot("result2");
        save();
    }, 10000);

    setTimeout(function()
    {
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function()
    {
        take_snapshot("result3");
        save();
    }, 15000);

    setTimeout(function()
    {
        speak_data = "All selfies has been taken. Thank you for using Voice Collage App.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 15000);
}

camera = document.getElementById("camera");

function take_snapshot()
{

    Webcam.snap(function(data_uri)
    {
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
    });
}
