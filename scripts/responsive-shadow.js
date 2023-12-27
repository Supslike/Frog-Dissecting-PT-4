var shadows = document.querySelectorAll(".shadowTEXT");
for (var i = 0; i < shadows.length; i++) {
    const p = shadows[i]
    const clamp = (a, m, n) => {
    const max = Math.max(m, n);
    const min = Math.min(m, n);
    return Math.max(min, Math.min(max, a));
    };
    const MAX_SHADOW_OFFSET = 5;
    const paint = (x, y) => {
        const r = p.getBoundingClientRect();
        const o = Math.min(r.width, r.height, MAX_SHADOW_OFFSET); // compute max shadow offset
        const mx = clamp(x, r.left - o, r.right + o); // clamp mouse coordinates within the shadow projection bounding box.
        const my = clamp(y, r.top - o, r.bottom + o);
        const px = r.right - r.width / 2; // compute element bb midpoints.
        const py = r.bottom - r.height / 2;
        const nx = (mx - px) / (r.right - r.left + 2 * o); // project mouse position relative to the bounding box to [-.5, .5];
        const ny = (my - py) / (r.bottom - r.top + 2 * o); 
        
        requestAnimationFrame(() => {
            p.style.textShadow = `${-1 * nx * o}px ${-1 * ny * o}px 10px rgba(0, 0, 0, 0.6)`;
        });
    };
    document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
        passive: true
      });
}

var shadows = document.querySelectorAll(".shadowBOX");
for (var i = 0; i < shadows.length; i++) {
    const p = shadows[i]
    const clamp = (a, m, n) => {
    const max = Math.max(m, n);
    const min = Math.min(m, n);
    return Math.max(min, Math.min(max, a));
    };
    const MAX_SHADOW_OFFSET = 10;
    const paint = (x, y) => {
        const r = p.getBoundingClientRect();
        const o = Math.min(r.width, r.height, MAX_SHADOW_OFFSET); // compute max shadow offset
        const mx = clamp(x, r.left - o, r.right + o); // clamp mouse coordinates within the shadow projection bounding box.
        const my = clamp(y, r.top - o, r.bottom + o);
        const px = r.right - r.width / 2; // compute element bb midpoints.
        const py = r.bottom - r.height / 2;
        const nx = (mx - px) / (r.right - r.left + 2 * o); // project mouse position relative to the bounding box to [-.5, .5];
        const ny = (my - py) / (r.bottom - r.top + 2 * o); 
        
        requestAnimationFrame(() => {
            p.style.boxShadow = `${-1 * nx * o}px ${-1 * ny * o}px 10px rgba(0, 0, 0, 0.6)`;
        });
    };
    document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
        passive: true
      });
}

