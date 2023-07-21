export const drawRect = (detections, ctx) =>{
    detections.forEach(predictions => {

        // get prediction results
        const [x, y, width, height] =  predictions['bbox'];
        const text = predictions['class'];


        // set style
        const color = 'black'
        ctx.strokeSylt = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color


        // Draw Rect
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()


    });
   
}