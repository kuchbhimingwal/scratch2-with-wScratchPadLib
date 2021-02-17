var num = Math.floor(Math.random() * 4) + 1;
$("#card").wScratchPad({
    size        : 100,          // The size of the brush/scratch.
    bg          : `Images/Gpay_Card ${num}.jpg`,  // Background (image path or hex color).
    fg          : 'Images/front.jpg',  // Foreground (image path or hex color).
    realtime    : true,       // Calculates percentage in realitime.
    scratchDown : null,       // Set scratchDown callback.
    scratchUp   : null,       // Set scratchUp callback.
    scratchMove : null,       // Set scratcMove callback.
    cursor      : 'crosshair' // Set cursor.
});