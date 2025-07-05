// DOM Elements
const temperatureInput = document.getElementById('temperature');
const temperatureError = document.getElementById('temperature-error');
const convertBtn = document.getElementById('convert-btn');
const resultSection = document.getElementById('result-section');
const resultValue = document.getElementById('result-value');
const resultUnit = document.getElementById('result-unit');

// Temperature conversion functions
const temperatureConverter = {
    // Convert Celsius to Fahrenheit
    celsiusToFahrenheit: (celsius) => {
        return (celsius * 9/5) + 32;
    },
    
    // Convert Fahrenheit to Celsius
    fahrenheitToCelsius: (fahrenheit) => {
        return (fahrenheit - 32) * 5/9;
    },
    
    // Convert Celsius to Kelvin
    celsiusToKelvin: (celsius) => {
        return celsius + 273.15;
    },
    
    // Convert Kelvin to Celsius
    kelvinToCelsius: (kelvin) => {
        return kelvin - 273.15;
    },
    
    // Convert Fahrenheit to Kelvin
    fahrenheitToKelvin: (fahrenheit) => {
        return (fahrenheit - 32) * 5/9 + 273.15;
    },
    
    // Convert Kelvin to Fahrenheit
    kelvinToFahrenheit: (kelvin) => {
        return (kelvin - 273.15) * 9/5 + 32;
    }
};

// Main conversion function
function convertTemperature(value, fromUnit, toUnit) {
    let result;
    
    // If converting to the same unit, return the original value
    if (fromUnit === toUnit) {
        return value;
    }
    
    // Convert to Celsius first (as intermediate step)
    let celsius;
    switch (fromUnit) {
        case 'celsius':
            celsius = value;
            break;
        case 'fahrenheit':
            celsius = temperatureConverter.fahrenheitToCelsius(value);
            break;
        case 'kelvin':
            celsius = temperatureConverter.kelvinToCelsius(value);
            break;
        default:
            throw new Error('Invalid from unit');
    }
    
    // Convert from Celsius to target unit
    switch (toUnit) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = temperatureConverter.celsiusToFahrenheit(celsius);
            break;
        case 'kelvin':
            result = temperatureConverter.celsiusToKelvin(celsius);
            break;
        default:
            throw new Error('Invalid to unit');
    }
    
    return result;
}

// Input validation
function validateInput(value) {
    const numValue = parseFloat(value);
    
    // Check if input is empty
    if (value.trim() === '') {
        return { isValid: false, message: 'Please enter a temperature value' };
    }
    
    // Check if input is a valid number
    if (isNaN(numValue)) {
        return { isValid: false, message: 'Please enter a valid number' };
    }
    
    // Check for reasonable temperature ranges
    if (numValue < -273.15) {
        return { isValid: false, message: 'Temperature cannot be below absolute zero (-273.15°C)' };
    }
    
    if (numValue > 10000) {
        return { isValid: false, message: 'Temperature seems too high. Please check your input' };
    }
    
    return { isValid: true, value: numValue };
}

// Get selected radio button value
function getSelectedUnit(name) {
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
    return selectedRadio ? selectedRadio.value : null;
}

// Format temperature for display
function formatTemperature(value, unit) {
    const roundedValue = Math.round(value * 100) / 100; // Round to 2 decimal places
    
    // Add unit symbols
    const unitSymbols = {
        'celsius': '°C',
        'fahrenheit': '°F',
        'kelvin': 'K'
    };
    
    return {
        value: roundedValue,
        unit: unitSymbols[unit] || unit
    };
}

// Show error message
function showError(message) {
    temperatureError.textContent = message;
    temperatureError.style.display = 'block';
    convertBtn.disabled = true;
}

// Clear error message
function clearError() {
    temperatureError.textContent = '';
    temperatureError.style.display = 'none';
    convertBtn.disabled = false;
}

// Display result
function displayResult(value, unit) {
    const formatted = formatTemperature(value, unit);
    resultValue.textContent = formatted.value;
    resultUnit.textContent = formatted.unit;
    
    // Show result section with animation
    resultSection.classList.add('show');
    
    // Scroll to result if needed
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Main conversion handler
function handleConversion() {
    const inputValue = temperatureInput.value;
    const fromUnit = getSelectedUnit('fromUnit');
    const toUnit = getSelectedUnit('toUnit');
    
    // Validate input
    const validation = validateInput(inputValue);
    if (!validation.isValid) {
        showError(validation.message);
        return;
    }
    
    // Clear any previous errors
    clearError();
    
    try {
        // Perform conversion
        const convertedValue = convertTemperature(validation.value, fromUnit, toUnit);
        
        // Display result
        displayResult(convertedValue, toUnit);
        
        // Add success animation to button
        convertBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            convertBtn.style.transform = '';
        }, 150);
        
    } catch (error) {
        showError('Conversion error: ' + error.message);
    }
}

// Event listeners
convertBtn.addEventListener('click', handleConversion);

// Allow Enter key to trigger conversion
temperatureInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleConversion();
    }
});

// Real-time input validation
temperatureInput.addEventListener('input', () => {
    const validation = validateInput(temperatureInput.value);
    if (!validation.isValid && temperatureInput.value.trim() !== '') {
        showError(validation.message);
    } else {
        clearError();
    }
});

// Prevent same unit conversion
document.querySelectorAll('input[name="fromUnit"], input[name="toUnit"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const fromUnit = getSelectedUnit('fromUnit');
        const toUnit = getSelectedUnit('toUnit');
        
        if (fromUnit === toUnit) {
            // Auto-select a different "to" unit
            const availableUnits = ['celsius', 'fahrenheit', 'kelvin'].filter(unit => unit !== fromUnit);
            const randomUnit = availableUnits[Math.floor(Math.random() * availableUnits.length)];
            document.querySelector(`input[name="toUnit"][value="${randomUnit}"]`).checked = true;
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Focus on input field
    temperatureInput.focus();
    
    // Add some fun facts about temperature
    const funFacts = [
        "Did you know? Absolute zero is -273.15°C (-459.67°F)",
        "Water boils at 100°C (212°F) at sea level",
        "The human body temperature is typically 37°C (98.6°F)",
        "The surface of the Sun is about 5,500°C (9,932°F)"
    ];
    
    // You could display these facts randomly or in a rotation
    console.log("Temperature Converter loaded! " + funFacts[Math.floor(Math.random() * funFacts.length)]);
});

// Add some keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to convert
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleConversion();
    }
    
    // Escape to clear input
    if (e.key === 'Escape') {
        temperatureInput.value = '';
        clearError();
        resultSection.classList.remove('show');
        temperatureInput.focus();
    }
}); 