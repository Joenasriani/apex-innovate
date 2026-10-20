"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * One quiet, architectural 3D object. No particles, neon or continuous spinning.
 * Pointer movement adjusts the orientation slightly; reduced-motion stays static.
 */
export function ApexThreeMark() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // Keep the CSS fallback when WebGL is unavailable.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.7;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    element.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(5.6, 4.2, 9.5);
    camera.lookAt(0, 0, 0);
    const bodyGeometry = new THREE.BoxGeometry(3.3, 3.3, 0.78);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x9caaa9, metalness: 0.45, roughness: 0.5 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.set(-0.16, -0.32, 0);
    scene.add(body);

    // A recessed center plate gives the object a precise, manufactured appearance.
    const plateGeometry = new THREE.BoxGeometry(2.48, 2.48, 0.09);
    const plateMaterial = new THREE.MeshStandardMaterial({ color: 0xe6e9e5, metalness: 0.2, roughness: 0.68 });
    const plate = new THREE.Mesh(plateGeometry, plateMaterial);
    plate.position.z = 0.43;
    body.add(plate);

    const edgeGeometry = new THREE.EdgesGeometry(bodyGeometry);
    const edges = new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({ color: 0x53605f, transparent: true, opacity: 0.45 }));
    body.add(edges);

    scene.add(new THREE.AmbientLight(0xffffff, 2.1));
    const key = new THREE.DirectionalLight(0xffffff, 3.6);
    key.position.set(-3, 7, 8);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xd1d7d4, 2);
    fill.position.set(6, 1, -4);
    scene.add(fill);

    let frame = 0;
    let targetX = -0.16;
    let targetY = -0.32;
    let visible = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw = () => renderer.render(scene, camera);
    const resize = () => {
      const width = Math.max(1, element.clientWidth);
      const height = Math.max(1, element.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      draw();
    };
    const animate = () => {
      if (!visible) return;
      body.rotation.x += (targetX - body.rotation.x) * 0.045;
      body.rotation.y += (targetY - body.rotation.y) * 0.045;
      draw();
      frame = window.requestAnimationFrame(animate);
    };
    const onPointer = (event: PointerEvent) => {
      if (reducedMotion) return;
      const rect = element.getBoundingClientRect();
      targetY = -0.32 + (((event.clientX - rect.left) / rect.width) - 0.5) * 0.22;
      targetX = -0.16 - (((event.clientY - rect.top) / rect.height) - 0.5) * 0.15;
    };
    const onLeave = () => { targetX = -0.16; targetY = -0.32; };
    const observer = new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting ?? false;
      window.cancelAnimationFrame(frame);
      if (visible) { if (reducedMotion) draw(); else animate(); }
    });
    const resizer = new ResizeObserver(resize);
    resizer.observe(element);
    observer.observe(element);
    element.addEventListener("pointermove", onPointer);
    element.addEventListener("pointerleave", onLeave);
    resize();
    if (reducedMotion) draw();
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect(); resizer.disconnect();
      element.removeEventListener("pointermove", onPointer);
      element.removeEventListener("pointerleave", onLeave);
      bodyGeometry.dispose(); bodyMaterial.dispose(); plateGeometry.dispose(); plateMaterial.dispose();
      edgeGeometry.dispose(); (edges.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return <div className="relative aspect-[5/4] w-full max-w-[460px] overflow-hidden rounded-sm bg-[#eef0ed]" role="img" aria-label="Subtle three-dimensional architectural panel that tilts slightly with pointer movement">
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[clamp(4rem,12vw,8rem)] font-semibold text-[#d0d5d2]" aria-hidden="true">A</div>
    <div ref={host} className="absolute inset-0" />
  </div>;
}
