// Applying text shadow effect to elements with class "shadowTEXT"
var textShadows = document.querySelectorAll(".shadowTEXT");
for (var i = 0; i < textShadows.length; i++) {
    const element = textShadows[i];

    // Function to clamp a value between a minimum and maximum
    const clamp = (a, m, n) => {
        const max = Math.max(m, n);
        const min = Math.min(m, n);
        return Math.max(min, Math.min(max, a));
    };

    const MAX_SHADOW_OFFSET = 5;

    // Function to paint the shadow based on mouse movement
    const paint = (x, y) => {
        const rect = element.getBoundingClientRect();
        const offset = Math.min(rect.width, rect.height, MAX_SHADOW_OFFSET);
        const mouseX = clamp(x, rect.left - offset, rect.right + offset);
        const mouseY = clamp(y, rect.top - offset, rect.bottom + offset);
        const midX = rect.right - rect.width / 2;
        const midY = rect.bottom - rect.height / 2;
        const normalizedX = (mouseX - midX) / (rect.right - rect.left + 2 * offset);
        const normalizedY = (mouseY - midY) / (rect.bottom - rect.top + 2 * offset);

        // Apply text shadow using CSS
        requestAnimationFrame(() => {
            element.style.textShadow = `${-1 * normalizedX * offset}px ${-1 * normalizedY * offset}px 10px rgba(0, 0, 0, 0.6)`;
        });
    };

    // Event listener for mouse movement
    document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
        passive: true
    });
}

// Applying box shadow effect to elements with class "shadowBOX"
var boxShadows = document.querySelectorAll(".shadowBOX");
for (var i = 0; i < boxShadows.length; i++) {
    const element = boxShadows[i];

    // Function to clamp a value between a minimum and maximum
    const clamp = (a, m, n) => {
        const max = Math.max(m, n);
        const min = Math.min(m, n);
        return Math.max(min, Math.min(max, a));
    };

    const MAX_SHADOW_OFFSET = 10;

    // Function to paint the shadow based on mouse movement
    const paint = (x, y) => {
        const rect = element.getBoundingClientRect();
        const offset = Math.min(rect.width, rect.height, MAX_SHADOW_OFFSET);
        const mouseX = clamp(x, rect.left - offset, rect.right + offset);
        const mouseY = clamp(y, rect.top - offset, rect.bottom + offset);
        const midX = rect.right - rect.width / 2;
        const midY = rect.bottom - rect.height / 2;
        const normalizedX = (mouseX - midX) / (rect.right - rect.left + 2 * offset);
        const normalizedY = (mouseY - midY) / (rect.bottom - rect.top + 2 * offset);

        // Apply box shadow using CSS
        requestAnimationFrame(() => {
            element.style.boxShadow = `${-1 * normalizedX * offset}px ${-1 * normalizedY * offset}px 10px rgba(0, 0, 0, 0.6)`;
        });
    };

    // Event listener for mouse movement
    document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
        passive: true
    });
};