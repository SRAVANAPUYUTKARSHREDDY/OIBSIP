# 🌡️ Temperature Converter

A beautiful, modern temperature converter web application that allows users to convert between Celsius, Fahrenheit, and Kelvin with a sleek, responsive design.

## ✨ Features

- **Three Temperature Units**: Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K)
- **Input Validation**: Ensures only valid numbers are entered and prevents impossible temperatures
- **Real-time Feedback**: Instant validation and error messages
- **Modern UI**: Beautiful gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Keyboard Shortcuts**: 
  - `Enter` to convert
  - `Ctrl/Cmd + Enter` to convert
  - `Escape` to clear input
- **Smart Unit Selection**: Automatically prevents converting to the same unit

## 🚀 How to Use

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **Enter Temperature**: Type a temperature value in the input field
3. **Select Source Unit**: Choose whether your input is in Celsius, Fahrenheit, or Kelvin
4. **Select Target Unit**: Choose which unit you want to convert to
5. **Convert**: Click the "Convert" button or press Enter
6. **View Result**: See your converted temperature displayed with the correct unit

## 🔧 Technical Details

### Temperature Conversion Formulas

- **Celsius to Fahrenheit**: `°F = (°C × 9/5) + 32`
- **Fahrenheit to Celsius**: `°C = (°F - 32) × 5/9`
- **Celsius to Kelvin**: `K = °C + 273.15`
- **Kelvin to Celsius**: `°C = K - 273.15`
- **Fahrenheit to Kelvin**: `K = (°F - 32) × 5/9 + 273.15`
- **Kelvin to Fahrenheit**: `°F = (K - 273.15) × 9/5 + 32`

### Input Validation

- ✅ Validates that input is a number
- ✅ Prevents temperatures below absolute zero (-273.15°C)
- ✅ Warns about unreasonably high temperatures (>10,000°C)
- ✅ Real-time validation feedback

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📁 File Structure

```
Temperature Convertor/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple-blue gradients
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Slide-up animations and hover effects
- **Custom Radio Buttons**: Styled radio buttons with custom indicators
- **Responsive Layout**: Adapts to different screen sizes
- **Modern Typography**: Uses Inter font family for clean readability

## 🎯 Example Conversions

| From | To | Example |
|------|----|---------|
| Celsius | Fahrenheit | 25°C = 77°F |
| Fahrenheit | Celsius | 98.6°F = 37°C |
| Celsius | Kelvin | 0°C = 273.15K |
| Kelvin | Fahrenheit | 300K = 80.33°F |

## 🔍 Fun Facts

The application includes some interesting temperature facts that appear in the console:
- Absolute zero is -273.15°C (-459.67°F)
- Water boils at 100°C (212°F) at sea level
- Human body temperature is typically 37°C (98.6°F)
- The surface of the Sun is about 5,500°C (9,932°F)

## 🛠️ Development

This is a vanilla HTML/CSS/JavaScript application with no external dependencies. To modify or extend:

1. Edit `index.html` for structure changes
2. Modify `styles.css` for design updates
3. Update `script.js` for functionality changes

## 📱 Mobile Experience

The application is fully responsive and provides an excellent mobile experience:
- Touch-friendly buttons and inputs
- Optimized layout for small screens
- Smooth scrolling and animations
- Proper viewport handling

## 🎉 Getting Started

1. Download or clone the files
2. Open `index.html` in your web browser
3. Start converting temperatures!

No installation or setup required - it works right out of the box!

---

Made with ❤️ | Temperature conversion made simple
