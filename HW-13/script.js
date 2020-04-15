// Set up Scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// New background Color
scene.background = new THREE.Color( 'rgb(235, 30, 208)' );


// Create Cube Shape
  var geometry = new THREE.TorusGeometry(5, 1.5, 8, 50 );
  var material = new THREE.MeshBasicMaterial({
      color: 0xffaaff // Color of cube
  });
  // Create material to make cube visible
  var torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  // Control Camera
  camera.position.z = 15;

  // Animate the scene, and render it
  function animate() {
      requestAnimationFrame( animate );
      // Include rotation, otherwise, we can't see the 3D effect.
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render( scene, camera );
  }
  animate();
