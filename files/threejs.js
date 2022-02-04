import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.126.1/build/three.module.js";

import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/loaders/DRACOLoader.js";
import { RGBELoader } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/loaders/RGBELoader.js";
import { RoughnessMipmapper } from "https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/utils/RoughnessMipmapper.js";
//import * as Nodes from 'https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/nodes/Nodes.js';


// draco
const draco = new DRACOLoader();
draco.setDecoderPath(
  "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/"
);
export const dracoLoader = draco;


let lightProbe,
directionalLight,
camera;


const sizes = {
  width: 445,
  height: 380
}

camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.set(0, 0, 80);


main();



function main() {

  

  const canvas = document.querySelector('#c');
  const  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 2.5;
  renderer.outputEncoding = THREE.sRGBEncoding;

  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  pmremGenerator.compileEquirectangularShader();


 

  function makeScene(elem) {
    const scene = new THREE.Scene();

    {
            // probe
  lightProbe = new THREE.LightProbe();
  scene.add( lightProbe );

  // light
  directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);
  directionalLight.position.set( 5, 5, 5 );
  scene.add( directionalLight );
    } 

	new RGBELoader()
	.setDataType(THREE.UnsignedByteType)
	.load(
	  "hdr/studio.hdr",
	  function (texture) {
		const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  
		scene.environment = envMap;
  
		texture.dispose();
		pmremGenerator.dispose();
		
  
		// model
  
		// use of RoughnessMipmapper is optional
		const roughnessMipmapper = new RoughnessMipmapper(renderer);
	  }
	);
	

    return {scene, camera, elem};

  }

  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);


function setupScene1() {

    const sceneInfo = makeScene(document.querySelector('#load_1')); 
  
gltfLoader.load('models/modelDraco6.gltf', function foo(gltf) {
	  const root = gltf.scene;
	  root.position.set(15, 12, 0);
	  root.scale.set(0.13, 0.13, 0.13);
	  root.rotation.set(-5.6, 5.9, 0.1);
	  sceneInfo.scene.add(root);

	  //texture.dispose();
        pmremGenerator.dispose();
    document.querySelector('.draco')
    .addEventListener('mousemove', function fooo(event) {
              let mouseX = 0, mouseY = 0;
              mouseX = event.clientX / sizes.width;
              mouseY = event.clientY / sizes.height;
              root.rotation.x = mouseX * 0.4;
              root.rotation.y = (-mouseY) * 0.4;
              camera.lookAt(new THREE.Vector3(0, 0, 0));
          });
	});

    return sceneInfo;


  }


  function setupScene2() {
    const sceneInfo = makeScene(document.querySelector('#load_2'));
    gltfLoader.load('models/modelDraco8.gltf', function foo(gltf) {
    

        const root = gltf.scene;
  
        root.position.set(15, 12, 0);
        root.scale.set(0.13, 0.13, 0.13);
        root.rotation.set(-5.6, 5.9, 0.1);
  
        sceneInfo.scene.add(root);
  
        //texture.dispose();
          pmremGenerator.dispose();

     document.querySelector('.draco-2')
     .addEventListener('mousemove', function fooo(event) {
               let mouseX = 0, mouseY = 0;
               mouseX = event.clientX / sizes.width;
               mouseY = event.clientY / sizes.height;
               root.rotation.x = mouseX * 0.3;
               root.rotation.y = (-mouseY) * 0.3;
               camera.lookAt(new THREE.Vector3(0, 0, 0));
           });
  
      });
    return sceneInfo;
  }

  function setupScene3() {

    const sceneInfo = makeScene(document.querySelector('#load_3'));
    
gltfLoader.load('models/modelDraco2.gltf', function foo(gltf) {
    

	  const root = gltf.scene;

	  root.position.set(15, 12, 0);
	  root.scale.set(0.13, 0.13, 0.13);
	  root.rotation.set(-5.6, 5.9, 0.1);

	  sceneInfo.scene.add(root);

	  //texture.dispose();
        pmremGenerator.dispose();


    document.querySelector('.draco-3')
    .addEventListener('mousemove', function fooo(event) {
              let mouseX = 0, mouseY = 0;
              mouseX = event.clientX / sizes.width;
              mouseY = event.clientY / sizes.height;
              root.rotation.x = mouseX * 0.3;
              root.rotation.y = (-mouseY) * 0.3;
              camera.lookAt(new THREE.Vector3(0, 0, 0));
          });

	});

    return sceneInfo;

  }

  function setupScene4() {

    const sceneInfo = makeScene(document.querySelector('#load_4'));
    
gltfLoader.load('models/modelDraco3.gltf', function foo(gltf) {
	  const root = gltf.scene;

	  root.position.set(15, 12, 0);
    root.scale.set(0.13, 0.13, 0.13);
	  root.rotation.set(-5.6, 5.9, 0.1);

	  sceneInfo.scene.add(root);

	  //texture.dispose();
        pmremGenerator.dispose();

    document.querySelector('.draco-4')
    .addEventListener('mousemove', function fooo(event) {
              let mouseX = 0, mouseY = 0;
              mouseX = event.clientX / sizes.width;
              mouseY = event.clientY / sizes.height;
              root.rotation.x = mouseX * 0.2;
              root.rotation.y = (-mouseY) * 0.2;
              camera.lookAt(new THREE.Vector3(0, 0, 0));
          });

	});
    return sceneInfo;

  }

  function setupScene5() {

    const sceneInfo = makeScene(document.querySelector('#load_5')); 
  
gltfLoader.load('models/modelDraco4.gltf', function foo(gltf) {
	  const root = gltf.scene;
	  root.position.set(15, 12, 0);
	  root.scale.set(0.13, 0.13, 0.13);
	  root.rotation.set(-5.6, 5.9, 0.1);
	  sceneInfo.scene.add(root);

	  //texture.dispose();
        pmremGenerator.dispose();
    document.querySelector('.draco-5')
    .addEventListener('mousemove', function fooo(event) {
              let mouseX = 0, mouseY = 0;
              mouseX = event.clientX / sizes.width;
              mouseY = event.clientY / sizes.height;
              root.rotation.x = mouseX * 0.4;
              root.rotation.y = (-mouseY) * 0.4;
              camera.lookAt(new THREE.Vector3(0, 0, 0));
          });
	});

    return sceneInfo;


  }


  function setupScene6() {
    const sceneInfo = makeScene(document.querySelector('#load_6'));
    gltfLoader.load('models/modelDraco5.gltf', function foo(gltf) {
    

        const root = gltf.scene;
  
        root.position.set(15, 12, 0);
        root.scale.set(0.13, 0.13, 0.13);
        root.rotation.set(-5.6, 5.9, 0.1);
  
        sceneInfo.scene.add(root);
  
        //texture.dispose();
          pmremGenerator.dispose();

     document.querySelector('.draco-6')
     .addEventListener('mousemove', function fooo(event) {
               let mouseX = 0, mouseY = 0;
               mouseX = event.clientX / sizes.width;
               mouseY = event.clientY / sizes.height;
               root.rotation.x = mouseX * 0.3;
               root.rotation.y = (-mouseY) * 0.3;
               camera.lookAt(new THREE.Vector3(0, 0, 0));
           });
  
      });
    return sceneInfo;
  }

  function setupScene7() {

    const sceneInfo = makeScene(document.querySelector('#load_7'));
    
gltfLoader.load('models/modelDraco7.gltf', function foo(gltf) {
    

	  const root = gltf.scene;

	  root.position.set(15, 12, 0);
	  root.scale.set(0.13, 0.13, 0.13);
	  root.rotation.set(-5.6, 5.9, 0.1);

	  sceneInfo.scene.add(root);

	  //texture.dispose();
        pmremGenerator.dispose();


    document.querySelector('.draco-7')
    .addEventListener('mousemove', function fooo(event) {
              let mouseX = 0, mouseY = 0;
              mouseX = event.clientX / sizes.width;
              mouseY = event.clientY / sizes.height;
              root.rotation.x = mouseX * 0.3;
              root.rotation.y = (-mouseY) * 0.3;
              camera.lookAt(new THREE.Vector3(0, 0, 0));
          });

	});

    return sceneInfo;

  }

  function setupScene8() {

    const sceneInfo = makeScene(document.querySelector('#load_8'));
    
gltfLoader.load('models/modelDraco.gltf', function foo(gltf) {
	  const root = gltf.scene;

	  root.position.set(15, 12, 0);
    root.scale.set(0.13, 0.13, 0.13);
	  root.rotation.set(-5.6, 5.9, 0.1);

	  sceneInfo.scene.add(root);

	  //texture.dispose();
        pmremGenerator.dispose();

    document.querySelector('.draco-8')
    .addEventListener('mousemove', function fooo(event) {
              let mouseX = 0, mouseY = 0;
              mouseX = event.clientX / sizes.width;
              mouseY = event.clientY / sizes.height;
              root.rotation.x = mouseX * 0.2;
              root.rotation.y = (-mouseY) * 0.2;
              camera.lookAt(new THREE.Vector3(0, 0, 0));
          });

	});
    return sceneInfo;

  }

 

  const sceneInfo1 = setupScene1();
  const sceneInfo2 = setupScene2();
  const sceneInfo3 = setupScene3();
  const sceneInfo4 = setupScene4();
  const sceneInfo5 = setupScene5();
  const sceneInfo6 = setupScene6();
  const sceneInfo7 = setupScene7();
  const sceneInfo8 = setupScene8();
  
 function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function renderSceneInfo(sceneInfo) {
    const {scene, camera, elem} = sceneInfo;

    // get the viewport relative position of this element
    const {left, right, top, bottom, width, height} =
        elem.getBoundingClientRect();

    const isOffscreen =
        bottom < 0 ||
        top > renderer.domElement.clientHeight ||
        right < 0 ||
        left > renderer.domElement.clientWidth;

    if (isOffscreen) {
      return;
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();


  



    const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
    renderer.setScissor(left, positiveYUpBottom, width, height);
    renderer.setViewport(left, positiveYUpBottom, width, height);

    renderer.render(scene, camera);

    
  }






  function render() {
    resizeRendererToDisplaySize(renderer);
    renderer.setScissorTest(false);
    renderer.clear(true, true);
    renderer.setScissorTest(true);



    renderSceneInfo(sceneInfo1);
    renderSceneInfo(sceneInfo2);
	  renderSceneInfo(sceneInfo3);
	  renderSceneInfo(sceneInfo4);
    renderSceneInfo(sceneInfo5);
    renderSceneInfo(sceneInfo6);
	  renderSceneInfo(sceneInfo7);
	  renderSceneInfo(sceneInfo8);
    

    requestAnimationFrame(render);
  }

 

  requestAnimationFrame(render);


}