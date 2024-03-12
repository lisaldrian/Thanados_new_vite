const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const navbar = document.getElementById('mynavbar');

const setDarkMode = () => {
  document.body.classList = 'dark';
  navbar.classList = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
  localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
  document.body.classList = 'light';
  navbar.classList = 'navbar navbar-expand-lg navbar-light bg-light fixed-top';
  localStorage.setItem('colorMode', 'light');
};

const colorModeFromLocalStorage = () => {
  return localStorage.getItem('colorMode');
};

const colorModeFromPreferences = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
              ? 'dark'
              : 'light';
};

const loadAndUpdateColor = () => {
  const color = colorModeFromLocalStorage() || colorModeFromPreferences();
  color === 'dark' ? setDarkMode() : setLightMode();
};

// when the inputs are clicked, check which radio button is checked and change the color
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    darkButton.checked ? setDarkMode() : setLightMode();
  });
});

// when the prefers-color-scheme changes, this event will be emitted
// event reflects the media query, if it matches, the new color is dark, else it is light
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
      });

// Load the right color on startup - localStorage has precedence
loadAndUpdateColor();
