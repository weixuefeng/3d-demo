# 3D Demo Start!

# Demos

- 3D MC Clone [/zhengyifeng/3d-mc-clone](https://gitlab.weinvent.org/zhengyifeng/3d-mc-clone)
  - original: https://codesandbox.io/s/vkgi6
- 3D Gallery [/zhengyifeng/3d-gallery](https://gitlab.weinvent.org/zhengyifeng/3d-gallery)
  - original: https://github.com/deanssmart/the-gallery

## Deps

- Base Boilerplate: https://github.com/arisac/react-templates
- `yarn add three` // ThreeJs Lib
  - https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
- `yarn add @types/three` // Types Three
- `yarn add @react-three/fiber` // React Three
  - https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
- `yarn add @react-three/drei` // 3D model loader
  - https://docs.pmnd.rs/drei/introduction
- `yarn add @react-three/cannon` // Physics Engine
  - https://github.com/pmndrs/use-cannon
- `yarn add @react-three/xr` // VR Support
  - https://github.com/pmndrs/react-xr
- `yarn add zustand` // State Mgmt, current job priority: low
  - https://docs.pmnd.rs/zustand/introduction

## Objective

- Re-reacte App
- Seperate World Layer
- Add Environment Layer
- Add Player, Control: pointerDevice & VR
- Seperate Building Loader
- Seperate Other Assets Loader
- Insert HTML into Canvas

## Frontend Loader Stack

- Scene Loader / with Backend API
    - Space Time Beacon
    - Teleporter Component
    - Player Component
    - Camera Component
    - Control Stack
    - Physics Engine

- Land Loader / with Backend API
    - Lands & Estates
    - Ground Structure
    - Materials
    - Boundaries

- Environment Loader / with Backend API
    - Sky, Sun, Moon, Stars Etc.
    - Lights
    - Sounds

- Structure Loader / with Backend API
    - Buildings / with Backend API
        - Structures
        - Walls
        - Frames
        - Materials
        - Lights
        - Static Objects
        - Interactive Objects
    - Objects / with Backend API
        - Static Objects
        - Interactive Objects

- MMO Loader / with Backend API
    - Players Link / with Backend API
    - Voice Link / with Backend API
    - IM Link / with Backend API