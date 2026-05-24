// translations.js

const translations = {
    en: {
        // Login Page
        owner_login: "Owner Login",
        username_label: "Username",
        password_label: "Password",
        placeholder_username: "Enter username",
        placeholder_password: "Enter password",
        login_btn: "Login",
        forgot_password: "Forgot Password?",
        // Navigation / Shared
        nav_home: "Home",
        nav_dashboard: "Dashboard",
        nav_receipts: "Receipts",
        nav_inventory: "Inventory",
        // Add more global text items here as you build your other pages!
    },
    zu: {
        // isiZulu
        owner_login: "Ukungena Komnikazi",
        username_label: "Igama lomsebenzisi",
        password_label: "Iphasiwedi",
        placeholder_username: "Faka igama lomsebenzisi",
        placeholder_password: "Faka iphasiwedi",
        login_btn: "Ngena",
        forgot_password: "Ukhohlwe Iphasiwedi?",
        nav_home: "Ekhaya",
        nav_dashboard: "Ideshibhodi",
        nav_receipts: "Amarisidi",
        nav_inventory: "Ukuphathwa Kwesitoko",
    },
    st: {
        // Sesotho
        owner_login: "Ho kena ha Mong'a",
        username_label: "Lebitso la mosebelisi",
        password_label: "Phasewete",
        placeholder_username: "Kenya lebitso la mosebelisi",
        placeholder_password: "Kenya phasewete",
        login_btn: "Kena",
        forgot_password: "O lebetse Phasewete?",
        nav_home: "Gae",
        nav_dashboard: "Letlapa la mosebetsi",
        nav_receipts: "Liriseiti",
        nav_inventory: "Inbentari",
    },
    af: {
        // Afrikaans
        owner_login: "Eienaar Teken In",
        username_label: "Gebruikersnaam",
        password_label: "Wagwoord",
        placeholder_username: "Voer gebruikersnaam in",
        placeholder_password: "Voer wagwoord in",
        login_btn: "Teken in",
        forgot_password: "Wagwoord vergeet?",
        nav_home: "Tuis",
        nav_dashboard: "Kontroleskerm",
        nav_receipts: "Kwitansies",
        nav_inventory: "Inventaris",
    }
};

// Function to translate the page based on the saved language preference
function applyTranslations() {
    // Default to English ('en') if no language is selected yet
    let currentLang = localStorage.getItem("selectedLanguage") || "en";

    // 1. Update text content for elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });

    // 2. Update placeholders for input fields with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[currentLang] && translations[currentLang][key]) {
            element.setAttribute("placeholder", translations[currentLang][key]);
        }
    });

    // 3. Keep the dropdown select option synchronized if it exists on the page
    const langSelect = document.getElementById("languageSelect");
    if (langSelect) {
        langSelect.value = currentLang;
    }
}

// Function to handle manual language changing from the dropdown
function changeLanguage() {
    const langSelect = document.getElementById("languageSelect");
    const selectedLang = langSelect.value;
    
    // Save to local storage
    localStorage.setItem("selectedLanguage", selectedLang);
    
    // Refresh page text instantly
    applyTranslations();
}

// Run the translation instantly whenever a page load happens
document.addEventListener("DOMContentLoaded", applyTranslations);