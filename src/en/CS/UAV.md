# Structure of an Multirotor UAV

With the development of the low-altitude economy, unmanned aerial vehicles (UAVs), also known as drones, have become indispensable in modern industries. Thanks to their high mobility and efficiency, UAVs have significantly impacted logistics, agriculture, disaster response, and more.

::: tip
**UAV (Unmanned Air Vehicle)**
A UAV is a type of drone that operates without an onboard pilot. It is primarily used in fields such as military applications, photography, and scientific research.
:::

## 0. Types of UAVs  
There are many types of UAVs:  

### 0x00 Fixed-Wing  
Relies on fixed wings to generate lift and uses an engine for propulsion.  
- **Applications** Long-range aerial operations, mapping, environmental monitoring  
- **Pros** Long range, high speed, large payload capacity  
- **Cons** Requires a runway or launcher for takeoff, low agility  

### 0x01 Multirotor  
Uses multiple rotors to produce lift, without requiring fixed wings.  
- **Applications** Low-altitude aerial photography, logistics, precision agriculture  
- **Pros** Highly agile, capable of vertical takeoff and hovering, low cost  
- **Cons** Short range, limited payload capacity, low endurance  

### 0x02 Airship  
Uses inert gases (e.g., helium) to provide buoyancy and propellers for navigation.  
- **Applications** High-altitude meteorological monitoring, communication relays  
- **Pros** Extremely long flight time, low noise levels  
- **Cons** Highly sensitive to wind conditions, slow speed  

### 0x03 Ground Effect Vehicle  
Relies on aerodynamic ground effects near the surface to generate lift.  
- **Applications** Coastal patrol, search and rescue  
- **Pros** High speed, energy-efficient power source  
- **Cons** Limited to low-altitude cruising, unsuitable for complex terrains  


## 1. Systems of a Multirotor
In order for a multirotor drone to operate, it must contain the following
![Diagram](/assets/CS/FPV/FPV.webp)

## 0x01 Power System
This makes the drone fly

### 1. Motors  
![Motor](/assets/CS/FPV/FPV-Motors.webp)  
Brushless motors are commonly used in multirotors, while small aircraft may use coreless motors. Motors are typically characterized by their KV value, which indicates the increase in RPM per 1-volt increase in voltage:  
$$ \Delta K_v = \frac{dK}{dU} $$  
Where $K$ represents RPM and $U$ represents voltage.  


### 2. Electronic Speed Controller (ESC)  
Also known as the ESC, it is the component responsible for controlling motor voltage based on DSHOT signals from the flight controller. Simply put, it translates flight control commands into motor power adjustments. This forms the first layer of the flight stack.  
![Speedybee f405 ESC](/assets/CS/FPV/FPV-ESC.webp)  


## 1x01 Control System  
### 3. Flight Controller  
![Frequency Channel Reference](/assets/CS/FPV/FPV-FC.webp)  
The **Flight Controller (FC)** is the brain of the aircraft. It includes a gyroscope for attitude adjustment data and integrates data from various sensors. The FC sends DSHOT signals to the ESC to drive motors, transmits camera feed to the VTX, and receives remote control signals via the receiver, among other tasks. This is the second layer of the flight stack.  

## 1x02 FPV System (Video Transmission System)  
### 4. Video Transmitter (VTX)  
![Frequency Channel Reference](/assets/CS/FPV/FPV-VTX.webp)  
The **Video Transmitter (VTX)** broadcasts camera feed data from the flight controller. It is typically equipped with an antenna to convert electrical signals into electromagnetic waves. Common transmission frequencies include 5.8 GHz, with power ranging from 100mW to 2W. The VTX can sometimes form the third layer of the flight stack.  
![Frequency Channel Reference](/assets/CS/FPV/FPV-VTX-CH.webp)  

### 5. Camera  
Equipped with a CMOS sensor, the camera typically uses a fixed-focus fisheye lens, with some models allowing adjustable focus.  
![Frequency Channel Reference](/assets/CS/FPV/FPV-Cam.webp)  

## 1x03 Receiving System  
### 6. Receiver  
![Frequency Channel Reference](/assets/CS/FPV/FPV-RX.webp)  
The **Receiver (RX module)** collects signals sent from the remote controller. It may also handle telemetry data feedback. Common protocols include:  
- **ELRS (ExpressLRS):** An open-source protocol.  
- **TBS (Team BlackSheep):** Generally offers better performance than ELRS but is more expensive.  
- **DJI:** Uses SBUS ports for signal reception. While the ecosystem is relatively closed, DJI VTX modules (e.g., DJI O3 Air Unit) can double as receivers, offering convenience for onboard recording.  

## 1x04 Frame  
### 7. Main/Bottom Carbon Plate  
The main body of the aircraft, where the flight stack is mounted.  
![Frequency Channel Reference](/assets/CS/FPV/FPV-Plate.webp)  

### 8. Propeller Guard  
Also known as the **Prop Guard**, it protects the propellers from damage and prevents them from harming other objects. Typically used on sub-4-inch aircraft, it is ideal for indoor aerial photography. Such aircraft are collectively called “Cinewhoops.” For smaller aircraft (<2.5 inches), the prop guard often doubles as a duct, leveraging its aerodynamic properties for additional lift and noise reduction. These are referred to as “ducted drones.”  
![Frequency Channel Reference](/assets/CS/FPV/FPV-Guard.webp)  

### 9. Side Carbon Plate  
Common in 5-inch or larger drones, the side carbon plates provide structural support. For Cinewhoops, this function is integrated into the duct design.  
