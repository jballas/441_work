// Set up Scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement)
renderer.outputEncoding = THREE.sRGBEncoding;

// New background Color
scene.background = new THREE.Color( 'rgb(235, 30, 208)' );


// Create Cube Shape
  var geometry = new THREE.TorusGeometry(2.5, .5, 8, 25 );
  var material = new THREE.MeshBasicMaterial({
      color: 0xdacd1a // Color of cube
  });
  // Create material to make cube visible
  var torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  var torus2 = new THREE.Mesh(geometry, material);
  scene.add(torus2);

  // Adding 3D models
  var loader = new THREE.GLTFLoader();

  loader.load('models/pine.glb', function(gltf) {

      scene.add(gltf.scene);
		    gltf.scale.set(2,2,2); // Object

  }, undefined, function(error) {

      console.error(error);

  });


  // Camera
//  camera.position.z = 15;


//  camera.position.x = 1000
//     camera.position.y = -20
//    camera.position.z = 5900

  // Animate the shapes, and render it
  function animate() {
      requestAnimationFrame( animate );
      // Include rotation, otherwise, we can't see the 3D effect.
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      torus2.rotation.x -= 0.02;
      torus2.rotation.y -= 0.02;
      renderer.render( scene, camera );
  }
  animate();

  // Rotate Models
  var rotation = 0

        function spinCamera() {
            rotation += 0.001
            camera.position.z = Math.sin(rotation) * 80;
            camera.position.x = Math.cos(rotation) * 80;
            camera.lookAt(scene.position)
        }
        var render = function() {

            requestAnimationFrame(render);
            spinCamera();

            renderer.render(scene, camera);
        };

        render();
