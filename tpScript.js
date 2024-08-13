// ==UserScript==
// @name         Auto-select TV Channels with Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button to automatically select specified TV channel categories
// @author       github.com/dgallagher33
// @match        https://bunnystreams.com/billing/clientarea.php?action=productdetails&id=4420&customAction=bouquets
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of channel categories to select by value
    const categoriesToSelect = [
        "1",   // USA Channels
        "60",  // USA Movies
        "63",  // Series
        "10",  // Canada
        "11",  // Australia
        "3",   // UK Channels
        "137"  // New Zealand
    ];

    // Create the button
    const button = document.createElement('button');
    button.innerText = 'Select Channels';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.padding = '6px 15px';
    button.style.backgroundColor = '#0e5077';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '3px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';

    // Add button to the page
    document.body.appendChild(button);

        function uncheckAllCheckboxes() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
    // Event listener to select the channels when the button is clicked
    button.addEventListener('click', () => {
        uncheckAllCheckboxes();
        categoriesToSelect.forEach(value => {
            const checkbox = document.querySelector(`input[type="checkbox"][value="${value}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    });

})();
