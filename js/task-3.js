function getElementWidth(content, padding, border) {
    // Витягуємо числові значення з рядків
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    // Розрахунок загальної ширини елемента для box-sizing: border-box
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    // Повертаємо результат
    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
