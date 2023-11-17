/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import plane from "../assets/3d/plane.glb";

export function Plane(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(plane);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.042}
        >
          <group
            name="365f4c91b47842d8b66a5eecbcbdb59dfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="polySurface78">
                  <group name="transform48" />
                </group>
                <group name="polySurface77">
                  <group name="transform46" />
                </group>
                <group name="polySurface76">
                  <group name="transform47" />
                </group>
                <group name="polySurface75">
                  <group name="transform45" />
                </group>
                <group name="polySurface74">
                  <group name="transform27" />
                </group>
                <group name="polySurface73">
                  <group name="transform44" />
                </group>
                <group name="polySurface72">
                  <group name="transform30" />
                </group>
                <group name="polySurface71">
                  <group name="transform99" />
                </group>
                <group name="polySurface70">
                  <group name="transform26" />
                </group>
                <group name="polySurface69">
                  <group name="transform97" />
                </group>
                <group name="polySurface68">
                  <group name="transform15" />
                </group>
                <group name="polySurface67">
                  <group name="transform22" />
                </group>
                <group name="polySurface53">
                  <group name="transform98" />
                </group>
                <group name="polySurface52">
                  <group name="transform20" />
                </group>
                <group name="polySurface51">
                  <group name="transform100" />
                </group>
                <group name="polySurface50">
                  <group name="transform38" />
                </group>
                <group name="polySurface49">
                  <group name="transform35" />
                </group>
                <group name="polySurface48">
                  <group name="transform42" />
                </group>
                <group name="polySurface47">
                  <group name="transform37" />
                </group>
                <group name="polySurface46">
                  <group name="transform41" />
                </group>
                <group name="polySurface45">
                  <group name="transform40" />
                </group>
                <group name="polySurface44">
                  <group name="transform34" />
                </group>
                <group name="polySurface43">
                  <group name="transform36" />
                </group>
                <group name="polySurface42">
                  <group name="transform39" />
                </group>
                <group name="polySurface66">
                  <group name="transform19" />
                </group>
                <group name="polySurface65">
                  <group name="transform43" />
                </group>
                <group name="polySurface64">
                  <group name="transform116" />
                </group>
                <group name="polySurface63">
                  <group name="transform16" />
                </group>
                <group name="polySurface62">
                  <group name="transform118" />
                </group>
                <group name="polySurface61">
                  <group name="transform33" />
                </group>
                <group name="polySurface60">
                  <group name="transform113" />
                </group>
                <group name="polySurface59">
                  <group name="transform120" />
                </group>
                <group name="polySurface58">
                  <group name="transform115" />
                </group>
                <group name="polySurface57">
                  <group name="transform119" />
                </group>
                <group name="polySurface56">
                  <group name="transform114" />
                </group>
                <group name="polySurface55">
                  <group name="transform24" />
                </group>
                <group name="polySurface54">
                  <group name="transform117" />
                </group>
                <group name="polySurface41">
                  <group name="transform71" />
                </group>
                <group name="polySurface40">
                  <group name="transform73" />
                </group>
                <group name="polySurface39">
                  <group name="transform72" />
                </group>
                <group name="polySurface38">
                  <group name="transform75" />
                </group>
                <group name="polySurface37">
                  <group name="transform79" />
                </group>
                <group name="polySurface36">
                  <group name="transform76" />
                </group>
                <group name="polySurface35">
                  <group name="transform70" />
                </group>
                <group name="polySurface34">
                  <group name="transform77" />
                </group>
                <group name="polySurface33">
                  <group name="transform74" />
                </group>
                <group name="polySurface32">
                  <group name="transform78" />
                </group>
                <group name="polySurface31">
                  <group name="transform69" />
                </group>
                <group name="polySurface30">
                  <group name="transform107" />
                </group>
                <group name="polySurface29">
                  <group name="transform109" />
                </group>
                <group name="polySurface11">
                  <group name="transform112" />
                </group>
                <group name="polySurface1">
                  <group name="transform106" />
                </group>
                <group name="polySurface10">
                  <group name="transform101" />
                </group>
                <group name="polySurface7">
                  <group name="transform108" />
                </group>
                <group name="polySurface5">
                  <group name="transform102" />
                </group>
                <group name="polySurface3">
                  <group name="transform103" />
                </group>
                <group name="polySurface8">
                  <group name="transform105" />
                </group>
                <group name="polySurface2">
                  <group name="transform110" />
                </group>
                <group name="polySurface6">
                  <group name="transform111" />
                </group>
                <group name="polySurface9">
                  <group name="transform104" />
                </group>
                <group name="polySurface4">
                  <group name="transform60" />
                </group>
                <group name="polySurface116">
                  <group name="transform61" />
                </group>
                <group name="polySurface115">
                  <group name="transform62" />
                </group>
                <group name="polySurface114">
                  <group name="transform63" />
                </group>
                <group name="polySurface113">
                  <group name="transform64" />
                </group>
                <group name="polySurface112">
                  <group name="transform65" />
                </group>
                <group name="polySurface111">
                  <group name="transform66" />
                </group>
                <group name="polySurface110">
                  <group name="transform18" />
                </group>
                <group name="polySurface109">
                  <group name="transform67" />
                </group>
                <group name="polySurface108">
                  <group name="transform25" />
                </group>
                <group name="polySurface107">
                  <group name="transform68" />
                </group>
                <group name="polySurface106">
                  <group name="transform49" />
                </group>
                <group name="polySurface105">
                  <group name="transform50" />
                </group>
                <group name="polySurface121">
                  <group name="transform51" />
                </group>
                <group name="polySurface120">
                  <group name="transform52" />
                </group>
                <group name="polySurface119">
                  <group name="transform53" />
                </group>
                <group name="polySurface118">
                  <group name="transform54" />
                </group>
                <group name="polySurface117">
                  <group name="transform55" />
                </group>
                <group name="polySurface91">
                  <group name="transform56" />
                </group>
                <group name="polySurface90">
                  <group name="transform57" />
                </group>
                <group name="polySurface89">
                  <group name="transform29" />
                </group>
                <group name="polySurface88">
                  <group name="transform58" />
                </group>
                <group name="polySurface87">
                  <group name="transform59" />
                </group>
                <group name="polySurface86">
                  <group name="transform129" />
                </group>
                <group name="polySurface85">
                  <group name="transform130" />
                </group>
                <group name="polySurface84">
                  <group name="transform131" />
                </group>
                <group name="polySurface83">
                  <group name="transform132" />
                </group>
                <group name="polySurface82">
                  <group name="transform133" />
                </group>
                <group name="polySurface81">
                  <group name="transform134" />
                </group>
                <group name="polySurface80">
                  <group name="transform21" />
                </group>
                <group name="polySurface79">
                  <group name="transform32" />
                </group>
                <group name="polySurface103">
                  <group name="transform23" />
                </group>
                <group name="polySurface102">
                  <group name="transform135" />
                </group>
                <group name="polySurface101">
                  <group name="transform136" />
                </group>
                <group name="polySurface100">
                  <group name="transform121" />
                </group>
                <group name="polySurface99">
                  <group name="transform122" />
                </group>
                <group name="polySurface98">
                  <group name="transform31" />
                </group>
                <group name="polySurface97">
                  <group name="transform123" />
                </group>
                <group name="polySurface96">
                  <group name="transform17" />
                </group>
                <group name="polySurface95">
                  <group name="transform124" />
                </group>
                <group name="polySurface94">
                  <group name="transform125" />
                </group>
                <group name="polySurface93">
                  <group name="transform126" />
                </group>
                <group name="polySurface92">
                  <group name="transform28" />
                </group>
                <group name="polySurface17">
                  <group name="transform127" />
                </group>
                <group name="polySurface16">
                  <group name="transform128" />
                </group>
                <group name="polySurface13">
                  <group name="transform82" />
                </group>
                <group name="polySurface14">
                  <group name="transform83" />
                </group>
                <group name="polySurface15">
                  <group name="transform84" />
                </group>
                <group name="polySurface12">
                  <group name="transform85" />
                </group>
                <group name="polySurface27">
                  <group name="transform86" />
                </group>
                <group name="polySurface25">
                  <group name="transform87" />
                </group>
                <group name="polySurface26">
                  <group name="transform88" />
                </group>
                <group name="polySurface28">
                  <group name="transform89" />
                </group>
                <group name="polySurface24">
                  <group name="transform90" />
                </group>
                <group name="polySurface23">
                  <group name="transform91" />
                </group>
                <group name="polySurface22">
                  <group name="transform92" />
                </group>
                <group name="polySurface21">
                  <group name="transform93" />
                </group>
                <group name="polySurface20">
                  <group name="transform94" />
                </group>
                <group name="polySurface19">
                  <group name="transform80" />
                </group>
                <group name="polySurface18">
                  <group name="transform81" />
                </group>
                <group
                  name="polySurface162"
                  position={[48.87, -58.157, -158.562]}
                >
                  <group
                    name="polySurface169"
                    position={[-0.861, 21.725, -3.893]}
                  >
                    <group name="transform95" />
                  </group>
                </group>
                <group name="polySurface170">
                  <group name="transform96" />
                </group>
                <group
                  name="polySurface172"
                  position={[-0.825, 5.808, -1.092]}
                  rotation={[0.013, 0.037, -0.065]}
                >
                  <group
                    name="polySurface171"
                    position={[0, -0.57, 14.211]}
                    rotation={[0, 0, -2.64]}
                  >
                    <group
                      name="polySurface304"
                      position={[0, -3.301, -12.838]}
                    >
                      <mesh
                        name="polySurface304_pasted__lambert2_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.polySurface304_pasted__lambert2_0.geometry
                        }
                        material={materials.pasted__lambert2}
                      />
                    </group>
                    <group
                      name="polySurface305"
                      position={[0, -3.301, -12.838]}
                    >
                      <mesh
                        name="polySurface305_pasted__lambert2_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.polySurface305_pasted__lambert2_0.geometry
                        }
                        material={materials.pasted__lambert2}
                      />
                    </group>
                    <group
                      name="polySurface306"
                      position={[0, -3.301, -12.838]}
                    >
                      <mesh
                        name="polySurface306_pasted__lambert2_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.polySurface306_pasted__lambert2_0.geometry
                        }
                        material={materials.pasted__lambert2}
                      />
                    </group>
                    <group
                      name="transform140"
                      position={[0, -3.301, -12.838]}
                    />
                    <group name="polySurface406" position={[0, 0.007, -0.608]}>
                      <mesh
                        name="polySurface406_Tooner_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface406_Tooner_0.geometry}
                        material={materials.Tooner}
                      />
                    </group>
                  </group>
                  <group
                    name="pCube1"
                    position={[0, -0.57, 13.286]}
                    rotation={[0, 0, 2.323]}
                    scale={14.594}
                  >
                    <mesh
                      name="pCube1_Blur_effect_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube1_Blur_effect_0.geometry}
                      material={materials.Blur_effect}
                    />
                  </group>
                  <group
                    name="pCube4"
                    position={[0, -0.57, 13.066]}
                    rotation={[0, 0, 2.242]}
                    scale={9.321}
                  >
                    <mesh
                      name="pCube4_Blur_effect_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube4_Blur_effect_0.geometry}
                      material={materials.Blur_effect}
                    />
                  </group>
                  <group
                    name="polySurface173"
                    position={[-11.646, -1.358, 1.225]}
                    rotation={[-0.073, 0, 0]}
                  >
                    <mesh
                      name="polySurface173_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface173_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                    <group name="pCube7" position={[-1.079, -0.014, -2.095]}>
                      <mesh
                        name="pCube7_lambert1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube7_lambert1_0.geometry}
                        material={materials.lambert1}
                      />
                    </group>
                    <group
                      name="polySurface407"
                      position={[11.646, -2.423, 0.381]}
                      rotation={[-0.061, 0, 0]}
                    >
                      <mesh
                        name="polySurface407_Tooner_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface407_Tooner_0.geometry}
                        material={materials.Tooner}
                      />
                    </group>
                  </group>
                  <group
                    name="polySurface174"
                    position={[11.646, -1.396, 1.146]}
                    rotation={[0.083, 0, 0]}
                  >
                    <mesh
                      name="polySurface174_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface174_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                    <group
                      name="pCube6"
                      position={[1.373, 0.052, -2.018]}
                      scale={[1, 1, 1.044]}
                    >
                      <mesh
                        name="pCube6_lambert1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube6_lambert1_0.geometry}
                        material={materials.lambert1}
                      />
                    </group>
                    <group
                      name="polySurface408"
                      position={[-11.646, -2.384, 0.459]}
                      rotation={[-0.061, 0, 0]}
                    >
                      <mesh
                        name="polySurface408_Tooner_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface408_Tooner_0.geometry}
                        material={materials.Tooner}
                      />
                    </group>
                  </group>
                  <group
                    name="polySurface182"
                    position={[-0.02, 3.621, 4.332]}
                    rotation={[-0.107, 0, 0]}
                  >
                    <mesh
                      name="polySurface182_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface182_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                    <group
                      name="polySurface165"
                      position={[-12.341, 1.3, -3.479]}
                      rotation={[3.134, 0, 0]}
                      scale={-1}
                    >
                      <mesh
                        name="polySurface165_pasted__lambert2_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.polySurface165_pasted__lambert2_0.geometry
                        }
                        material={materials.pasted__lambert2}
                      />
                      <group
                        name="transform138"
                        position={[-12.364, -8.487, 0.827]}
                        rotation={[3.081, 0, 0]}
                        scale={-1}
                      />
                      <group name="pCube8" position={[1.695, -0.021, -1.87]}>
                        <mesh
                          name="pCube8_lambert1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube8_lambert1_0.geometry}
                          material={materials.lambert1}
                        />
                      </group>
                      <group
                        name="polySurface410"
                        position={[-12.364, -8.487, 0.827]}
                        rotation={[3.081, 0, 0]}
                        scale={-1}
                      >
                        <mesh
                          name="polySurface410_Tooner_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface410_Tooner_0.geometry}
                          material={materials.Tooner}
                        />
                      </group>
                    </group>
                    <group
                      name="polySurface161"
                      position={[12.388, 1.3, -3.44]}
                      rotation={[0.175, 0, 0]}
                    >
                      <mesh
                        name="polySurface161_pasted__lambert2_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.polySurface161_pasted__lambert2_0.geometry
                        }
                        material={materials.pasted__lambert2}
                      />
                      <group
                        name="pCube5"
                        position={[1.802, 0.082, -1.876]}
                        scale={[1, 1, 0.872]}
                      >
                        <mesh
                          name="pCube5_lambert1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube5_lambert1_0.geometry}
                          material={materials.lambert1}
                        />
                      </group>
                      <group
                        name="polySurface411"
                        position={[-12.364, -8.489, 0.788]}
                        rotation={[-0.061, 0, 0]}
                      >
                        <mesh
                          name="polySurface411_Tooner_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface411_Tooner_0.geometry}
                          material={materials.Tooner}
                        />
                      </group>
                    </group>
                    <group
                      name="polySurface409"
                      position={[0.023, -7.222, -3.17]}
                    >
                      <mesh
                        name="polySurface409_Tooner_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface409_Tooner_0.geometry}
                        material={materials.Tooner}
                      />
                    </group>
                  </group>
                  <group name="pCube10" position={[-6.25, 0.64, -12.783]}>
                    <mesh
                      name="pCube10_lambert1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube10_lambert1_0.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                  <group name="pCube9" position={[6.603, 0.66, -12.573]}>
                    <mesh
                      name="pCube9_lambert1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube9_lambert1_0.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                  <group name="pCube11" position={[0.03, 5.295, -12.12]}>
                    <mesh
                      name="pCube11_lambert1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube11_lambert1_0.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                  <group name="polySurface187" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface187_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface187_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface188" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface188_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface188_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface189" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface189_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface189_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface190" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface190_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface190_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface191" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface191_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface191_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface192" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface192_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface192_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface193" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface193_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface193_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface194" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface194_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface194_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface195" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface195_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface195_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface196" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface196_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface196_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface197" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface197_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface197_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface198" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface198_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface198_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface199" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface199_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface199_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface200" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface200_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface200_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface201" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface201_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface201_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface202" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface202_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface202_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface203" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface203_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface203_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface204" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface204_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface204_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface205" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface205_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface205_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface206" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface206_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface206_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface207" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface207_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface207_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface208" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface208_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface208_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface209" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface209_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface209_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface210" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface210_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface210_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface211" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface211_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface211_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface212" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface212_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface212_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface213" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface213_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface213_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface214" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface214_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface214_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface215" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface215_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface215_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface216" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface216_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface216_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface217" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface217_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface217_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface218" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface218_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface218_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface219" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface219_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface219_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface220" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface220_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface220_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface221" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface221_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface221_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface222" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface222_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface222_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface223" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface223_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface223_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface224" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface224_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface224_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface225" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface225_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface225_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface226" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface226_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface226_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface227" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface227_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface227_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface228" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface228_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface228_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface229" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface229_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface229_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface230" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface230_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface230_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface231" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface231_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface231_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface232" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface232_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface232_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface233" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface233_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface233_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface234" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface234_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface234_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface235" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface235_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface235_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface236" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface236_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface236_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface237" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface237_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface237_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface238" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface238_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface238_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface239" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface239_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface239_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface240" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface240_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface240_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface241" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface241_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface241_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface242" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface242_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface242_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface243" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface243_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface243_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface244" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface244_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface244_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface245" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface245_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface245_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface246" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface246_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface246_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface247" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface247_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface247_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface248" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface248_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface248_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface249" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface249_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface249_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface250" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface250_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface250_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface251" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface251_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface251_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface252" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface252_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface252_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface253" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface253_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface253_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface254" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface254_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface254_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface255" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface255_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface255_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface256" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface256_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface256_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface257" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface257_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface257_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface258" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface258_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface258_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface259" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface259_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface259_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface260" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface260_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface260_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface261" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface261_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface261_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface262" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface262_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface262_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface263" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface263_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface263_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface264" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface264_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface264_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface265" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface265_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface265_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface266" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface266_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface266_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface267" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface267_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface267_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface268" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface268_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface268_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface269" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface269_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface269_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface270" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface270_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface270_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface271" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface271_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface271_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface272" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface272_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface272_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface273" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface273_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface273_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface274" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface274_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface274_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface275" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface275_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface275_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface276" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface276_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface276_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface277" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface277_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface277_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface278" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface278_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface278_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface279" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface279_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface279_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface280" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface280_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface280_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface281" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface281_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface281_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface282" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface282_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface282_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface283" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface283_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface283_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface284" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface284_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface284_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface285" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface285_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface285_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface286" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface286_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface286_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface287" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface287_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface287_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface288" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface288_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface288_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface289" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface289_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface289_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface290" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface290_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface290_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface291" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface291_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface291_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface292" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface292_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface292_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface293" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface293_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface293_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface294" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface294_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface294_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface295" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface295_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface295_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface296" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface296_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface296_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface297" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface297_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface297_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface298" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface298_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface298_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface299" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface299_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface299_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface300" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface300_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface300_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface301" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface301_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface301_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface302" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface302_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface302_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="polySurface303" position={[0, -3.871, 1.373]}>
                    <mesh
                      name="polySurface303_pasted__lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface303_pasted__lambert2_0.geometry
                      }
                      material={materials.pasted__lambert2}
                    />
                  </group>
                  <group name="transform139" position={[0, -3.871, 1.373]} />
                  <group name="polySurface308" position={[0, 0.093, 0.04]}>
                    <mesh
                      name="polySurface308_Tooner_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface308_Tooner_0.geometry}
                      material={materials.Tooner}
                    />
                  </group>
                </group>
                <group name="nucleus1" />
                <group name="polySurface186">
                  <group name="transform142" />
                </group>
                <group name="nurbsCircle1" position={[0, 0, -4.201]}>
                  <group
                    name="pCube12"
                    position={[27.469, 9.737, -42.131]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle2" position={[-8.754, -5.271, 10.964]}>
                  <group
                    name="pCube12_1"
                    position={[27.469, 9.737, -41.475]}
                    scale={0.014}
                  >
                    <mesh
                      name="pCube12_lambert1_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_1.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle3" position={[-7.432, 8.264, -16.655]}>
                  <group
                    name="pCube12_2"
                    position={[27.469, 9.737, 25.694]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_2.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle4" position={[-19.1, 5.528, -0.442]}>
                  <group
                    name="pCube12_3"
                    position={[27.469, 9.737, 41.906]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0_3"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_3.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle5" position={[-14.622, -16.605, -6.16]}>
                  <group
                    name="pCube12_4"
                    position={[27.469, 9.737, 36.189]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0_4"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_4.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle6" position={[-24.307, -17.683, 1.906]}>
                  <group
                    name="pCube12_5"
                    position={[27.469, 9.737, 11.379]}
                    scale={0.889}
                  >
                    <mesh
                      name="pCube12_lambert1_0_5"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_5.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle7" position={[-27.877, 7.693, 7.913]}>
                  <group
                    name="pCube12_6"
                    position={[27.469, 9.737, 50.262]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_6.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle8" position={[-40.063, 10.44, -13.222]}>
                  <group
                    name="pCube12_7"
                    position={[27.469, 9.737, -10.461]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0_7"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_7.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group name="nurbsCircle9" position={[-48.152, 2.472, 2.452]}>
                  <group
                    name="pCube12_8"
                    position={[27.469, 9.737, 36.189]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_8.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group
                  name="nurbsCircle10"
                  position={[-38.159, -10.889, -6.16]}
                >
                  <group
                    name="pCube12_9"
                    position={[27.469, 9.737, 36.189]}
                    scale={0}
                  >
                    <mesh
                      name="pCube12_lambert1_0_9"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_9.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
                <group
                  name="nurbsCircle11"
                  position={[-46.041, -5.981, -16.945]}
                >
                  <group
                    name="pCube12_10"
                    position={[27.469, 9.737, -22.818]}
                    scale={0.372}
                  >
                    <mesh
                      name="pCube12_lambert1_0_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube12_lambert1_0_10.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
