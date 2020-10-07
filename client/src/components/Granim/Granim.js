import React from 'react';


function Granim () {
    return (
        <div>
        <canvas id="granim-canvas"></canvas>
        <script src="granim.min.js"></script>

        <script>
        var granimInstance = new Granim({
        element: '#granim-canvas',
        name: 'granim',
        opacity: [1, 1],
        states : {
       "default-state": {
        gradients: [
               ['#834D9B', '#D04ED6'],
               ['#1CD8D2', '#93EDC7']
           ]
       }
   }
});
</script>
        
        </div>
    );
}

export default Granim;