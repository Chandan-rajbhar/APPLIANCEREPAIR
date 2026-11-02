import {
  Waves,
  Wind,
  Refrigerator,
  Snowflake,
  Disc,
  Flame,
  Microwave,
  Trash2,
  Wine,
  Phone,
  FileText,
  Calendar,
  Wrench,
  ShieldCheck
} from 'lucide-react';

import washersImg from '../assets/appliances/washers.png';
import dryersImg from '../assets/appliances/dryers.png';
import refrigeratorsImg from '../assets/appliances/refrigerators.png';
import freezersImg from '../assets/appliances/freezers.png';
import dishwashersImg from '../assets/appliances/dishwashers.png';
import ovensImg from '../assets/appliances/ovens.png';
import microwavesImg from '../assets/appliances/microwaves.png';
import disposalsImg from '../assets/appliances/disposals.png';
import icemakersImg from '../assets/appliances/icemakers.png';
import winecoolersImg from '../assets/appliances/winecoolers.png';

export const APPLIANCES = [
  {
    id: 'washers',
    name: 'Washers',
    desc: 'Washing machine diagnosis & fix',
    image: washersImg,
    icon: Waves,
    tag: 'Laundry Care',
    details: 'Fixing drum imbalance, drainage failure, spin cycle stalls, water intake errors, and electronic control board malfunctions across all major front-load and top-load brands.'
  },
  {
    id: 'dryers',
    name: 'Dryers',
    desc: 'Servicing and heating issue repairs',
    image: dryersImg,
    icon: Wind,
    tag: 'Laundry Care',
    details: 'Restoring faulty thermal fuses, blown heating elements, snapped drive belts, worn drum rollers, and squeaking pulleys for both gas and electric dryers.'
  },
  {
    id: 'refrigerators',
    name: 'Refrigerators',
    desc: 'Cooling, leaks & compressor repair',
    image: refrigeratorsImg,
    icon: Refrigerator,
    tag: 'Cooling',
    details: 'Troubleshooting clicking start relays, silent compressor failures, evaporator coil freezing, door gasket seal breaches, and smart inverter system diagnostics.'
  },
  {
    id: 'freezers',
    name: 'Freezers',
    desc: 'Defrost & thermostat issues',
    image: freezersImg,
    icon: Snowflake,
    tag: 'Cooling',
    details: 'Expert resolution of frost buildup, defrost sensor failures, erratic sub-zero temperatures, and sudden cooling loss on upright and chest freezers.'
  },
  {
    id: 'dishwashers',
    name: 'Dishwashers',
    desc: 'Leaks, drainage & pump repair',
    image: dishwashersImg,
    icon: Disc,
    tag: 'Kitchen Care',
    details: 'Eliminating standing water in tubs, replacing circulation impellers, clearing spray arm blockages, and installing OEM water inlet valves to stop leaks.'
  },
  {
    id: 'ovens',
    name: 'Ovens & Ranges',
    desc: 'Igniters & heating elements',
    image: ovensImg,
    icon: Flame,
    tag: 'Kitchen Care',
    details: 'Calibrating broil and bake elements, replacing weak glow-bar igniters, fixing surface burners that click continuously, and testing digital control boards.'
  },
  {
    id: 'microwaves',
    name: 'Microwaves',
    desc: 'Magnetron & electrical repairs',
    image: microwavesImg,
    icon: Microwave,
    tag: 'Kitchen Care',
    details: 'Repairing door safety interlocks, burnt high-voltage diodes, magnetrons with zero heating output, and unresponsive capacitive touch control panels.'
  },
  {
    id: 'disposals',
    name: 'Disposals',
    desc: 'Jams & motor replacement',
    image: disposalsImg,
    icon: Trash2,
    tag: 'Kitchen Care',
    details: 'Safely clearing jammed shredder rings, replacing burnt-out under-sink induction motors, repairing flange leaks, and testing pneumatic switches.'
  },
  {
    id: 'icemakers',
    name: 'Ice Makers',
    desc: 'Water line & motor replacement',
    image: icemakersImg,
    icon: Snowflake,
    tag: 'Cooling',
    details: 'Fixing frozen fill tubes, replacing ejector gear motors, solving hollow or misshapen ice cubes, and testing dual solenoid inlet valves.'
  },
  {
    id: 'winecoolers',
    name: 'Wine Coolers',
    desc: 'Precise temperature restoring',
    image: winecoolersImg,
    icon: Wine,
    tag: 'Cooling',
    details: 'Dual-zone electronic thermostat calibration, thermoelectric peltier chip repair, whisper-quiet fan replacements, and humidity stabilization.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    num: 1,
    icon: Phone,
    title: 'You Call the Number',
    desc: "Call with details about your faulty appliance. We're ready to gather information and get you scheduled swiftly.",
    link: 'Fast & Easy Connection'
  },
  {
    num: 2,
    icon: FileText,
    title: 'Describe Your Problem',
    desc: "Tell us the brand, model, and symptoms. We'll match you with a qualified local technician promptly.",
    link: 'Quick Intake Process'
  },
  {
    num: 3,
    icon: Calendar,
    title: 'Get a Same-Day Slot',
    desc: 'A local technician is scheduled to arrive at your home during a convenient service window.',
    link: 'Prompt Arrival Times'
  },
  {
    num: 4,
    icon: Wrench,
    title: 'Expert Repair, Fair Price',
    desc: 'Technician performs thorough diagnostics and offers upfront, fair pricing before fixing your appliance.',
    link: 'Clear Upfront Quotes'
  },
  {
    num: 5,
    icon: ShieldCheck,
    title: 'Pay Only for Results',
    desc: 'You pay only for completed diagnostic and approved repairs, backed by quality assurance.',
    link: 'Guaranteed Satisfaction'
  }
];
