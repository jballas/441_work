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

var model = load_model();

  function load_model(){
    loader.load('models/pine.glb', function(gltf) {

      scene.add(gltf.scene);
      gltf.scene.scale.set(.15,.15,.15); // THIS fixes the scale of model
        gltf.scene.position.set(0, -40, 0); // This moves the position

  }, undefined, function(error) {
      console.error(error);
  });
  }

// TEXT
    loadFont()

function loadFont() {
            var loader = new THREE.FontLoader();

              loader.load('js/Kaushan_Script_Regular.json', function(res){
                font = res;
                createText();
            });
        }

        function createText() {
                    // change the text here
                    textGeo = new THREE.TextGeometry( ' You\nAre\nInvited!\nMiranda\nand\nJason', {
                          font: font,
                          size: 5,
                          height: 5,
                          curveSegments: 12,
                          bevelEnabled: false,
                          bevelThickness: 10,
                          bevelSize: 8,
                          bevelOffset: 0,
                          bevelSegments: 3
                    });
                    textGeo.computeBoundingBox();
                    textGeo.computeVertexNormals();

                    // change the color here
                    var color = new THREE.Color(0x07280a);
                    var textMaterial = new THREE.MeshBasicMaterial({
                        color: color
                    });
                    var text = new THREE.Mesh(textGeo, textMaterial)
                    text.position.x = -textGeo.boundingBox.max.x / 2;
                    text.castShadow = true;
                    scene.add(text)
                }

// Camera
     camera.position.y = -20

// Lighting
var light = new THREE.DirectionalLight(0xf3d2f9, 3);

scene.add(light);

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
