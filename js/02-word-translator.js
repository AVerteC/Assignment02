let langCode = prompt("Enter a language code (es, de, en, fr):");
if (langCode === "es") {
    language = "Spanish";
    translatedPhrase = "Hola Mundo";
    console.log(`Hello World translated in ${language} is: ${translatedPhrase}`);
}
else if (langCode === "de") {
    language = "German";
    translatedPhrase = "Hallo Welt";
    console.log(`Hello World translated in ${language} is: ${translatedPhrase}`);
}
else if (langCode === "en") {
    language = "English";
    translatedPhrase = "Hello World";
    console.log(`Hello World translated in ${language} is: ${translatedPhrase}`);
}
else if (langCode === "fr") {
    language = "French";
    translatedPhrase = "Bonjour le monde";
    console.log(`Hello World translated in ${language} is: ${translatedPhrase}`);
}
else {
    language = "English";
    translatedPhrase = "Hello World";
    console.log(`Hello World translated in ${language} is: ${translatedPhrase}`);
}