const main = function(hostElement:HTMLElement) {
    console.log(hostElement);

    const focusElements = hostElement.querySelectorAll('.focusTarget');
    console.log(focusElements);
    focusElements.forEach(focusElement => {
        console.log(focusElement);
        focusElement.setAttribute('tabindex', '0');
    });

    // Demonstrate focusing on a particular element
    (focusElements[5] as HTMLElement).focus()
}

export default main;