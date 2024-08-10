// Function to fetch language data from a JSON file
async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`languages/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${lang}.json: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching language data:', error);
        // Optionally, you can fallback to default language in case of error
        return {}; // Return an empty object or some default data
    }
}

// Function to change the language
async function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Store the selected language
    const langData = await fetchLanguageData(lang); // Fetch the language data
    updateLanguage(langData); // Update the text on the page with the fetched data
}

// Function to update the language on the page
function updateLanguage(langData) {
    // Select all elements that have the data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    // Loop through each element and update its text content based on the data-i18n key
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n'); // Get the data-i18n key
        if (langData[key]) {
            element.textContent = langData[key]; // Update the content with the corresponding translation
        }
    });
}

// Function that runs when the page is loaded
window.onload = async function() {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "de"; // Default to German
    const langData = await fetchLanguageData(savedLanguage); // Fetch the language data
    updateLanguage(langData); // Update the text on the page with the fetched data
}
