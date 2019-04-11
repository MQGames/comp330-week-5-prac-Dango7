"use strict";

class Circle extends GameObject {

    /**
    * Construct a polygon representing a unit circle with the specified number of sides and colour
    */
    
    constructor(colour) {
        check(isArray(colour));
        // call the constructor of the superclass
        super();

        const nSides = 8;
        this.colour = colour;
        this.points = new Float32Array(nSides * 2);

        const theta = 2 * Math.PI / nSides;
        for (let i = 0; i < nSides; i++) {
            this.points[2*i] = Math.cos(i * theta);     // set the x coordinate
            this.points[2*i+1] = Math.sin(i * theta);   // set the y coordinate
        }
    }

    renderSelf(gl, colourUniform) {
        check(isContext(gl), isUniformLocation(colourUniform));

        // TODO: Write code to render the shape at the origin, in the desired colour
        // Hint: use a TRIANGLE_FAN
        gl.uniform4fv(colourUniform, this.colour);
        gl.bufferData(
            gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
        gl.drawArrays(
            gl.TRIANGLE_FAN, 0, this.points.length / 2);
    }

}