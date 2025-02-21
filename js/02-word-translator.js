// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
// If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
// If the user enters anything but those four language codes, the application should default to English. 
// The result should be (for example):
// Hello World translated in French is: Bonjour le monde

document.write("Word Translator:<br>");
let langCode = prompt("Enter a language code (es, de, en, fr):");

if (langCode === "es") {
    language = "Spanish";
    translatedPhrase = "Hola Mundo";
    document.write(`Hello World translated in ${language} is: ${translatedPhrase}<br>`);
}
else if (langCode === "de") {
    language = "German";
    translatedPhrase = "Hallo Welt";
    document.write(`Hello World translated in ${language} is: ${translatedPhrase}<br>`);
}
else if (langCode === "en") {
    language = "English";
    translatedPhrase = "Hello World";
    document.write(`Hello World translated in ${language} is: ${translatedPhrase}<br>`);
}
else if (langCode === "fr") {
    language = "French";
    translatedPhrase = "Bonjour le monde";
    document.write(`Hello World translated in ${language} is: ${translatedPhrase}<br>`);
}
else {
    language = "English";
    translatedPhrase = "Hello World";
    document.write(`Hello World translated in ${language} is: ${translatedPhrase}<br>`);
}