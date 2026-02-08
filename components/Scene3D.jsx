'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { THEME } from '../lib/theme'

// Theme-based colors
const THEME_COLORS = {
    dark: {
        sphere: 0xa855f7,      // Purple
        particles: 0x06b6d4,   // Cyan
        ambientLight: 0xffffff,
        pointLight1: 0xffffff,
        pointLight2: 0x3b82f6, // Blue
    },
    light: {
        sphere: 0x7c3aed,      // Darker purple for contrast
        particles: 0x0891b2,   // Darker cyan
        ambientLight: 0xffffff,
        pointLight1: 0xffd700, // Golden light
        pointLight2: 0x2563eb, // Darker blue
    }
}

const colors = THEME_COLORS[THEME]

export default function Scene3D() {
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.z = 5

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        containerRef.current.appendChild(renderer.domElement)

        // Create animated sphere
        const geometry = new THREE.IcosahedronGeometry(2, 4)
        const material = new THREE.MeshStandardMaterial({
            color: colors.sphere,
            roughness: 0.2,
            metalness: 0.8,
            wireframe: false,
        })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 1500
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10
        }

        particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(posArray, 3)
        )

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: colors.particles,
            transparent: true,
            opacity: 0.6,
        })

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        // Lights
        const ambientLight = new THREE.AmbientLight(colors.ambientLight, 0.5)
        scene.add(ambientLight)

        const pointLight1 = new THREE.PointLight(colors.pointLight1, 1)
        pointLight1.position.set(10, 10, 10)
        scene.add(pointLight1)

        const pointLight2 = new THREE.PointLight(colors.pointLight2, 0.5)
        pointLight2.position.set(-10, -10, -10)
        scene.add(pointLight2)

        // Mouse interaction
        let mouseX = 0
        let mouseY = 0

        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate)

            // Rotate sphere
            sphere.rotation.x += 0.002
            sphere.rotation.y += 0.003

            // Floating animation
            sphere.position.y = Math.sin(Date.now() * 0.001) * 0.1

            // Rotate particles
            particlesMesh.rotation.y += 0.0005

            // Camera follows mouse
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05
            camera.lookAt(scene.position)

            renderer.render(scene, camera)
        }

        animate()

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
            containerRef.current?.removeChild(renderer.domElement)
            geometry.dispose()
            material.dispose()
            particlesGeometry.dispose()
            particlesMaterial.dispose()
            renderer.dispose()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
            }}
        />
    )
}
