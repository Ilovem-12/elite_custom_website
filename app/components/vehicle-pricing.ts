export type VehicleCategory = 'utes' | 'vans' | 'trucks' | 'hatchbacks';
export const vehicleStyles: Record<VehicleCategory, string[]> = {
  utes: ['Dual Cab', 'Dual Cab Tray Back', 'Single Cab Ute', 'Dual Cab Toolbox', 'Single Cab Toolbox'],
  vans: ['Standard Van', 'Extra Large Van'],
  trucks: ['Truck Cab', 'Large Truck'],
  hatchbacks: ['Hatchback'],
};
export const vehicleCatalog: Record<VehicleCategory, Record<string, string[]>> = {
  utes: {
    Toyota: ['HiLux', 'LandCruiser 70'], Ford: ['Ranger'], Mitsubishi: ['Triton'], Isuzu: ['D-MAX'],
    Mazda: ['BT-50'], Nissan: ['Navara'], GWM: ['Cannon'], LDV: ['T60'],
  },
  vans: {
    Toyota: ['HiAce'], Ford: ['Transit Custom', 'Transit'], Hyundai: ['Staria Load', 'iLoad'],
    'Mercedes-Benz': ['Vito', 'Sprinter'], Volkswagen: ['Transporter', 'Crafter'],
    Renault: ['Trafic', 'Master'], LDV: ['G10', 'V80', 'Deliver 9'], Peugeot: ['Expert', 'Boxer'],
  },
  trucks: { Isuzu: ['N Series', 'F Series'], Hino: ['300 Series', '500 Series'], Fuso: ['Canter', 'Fighter'] },
  hatchbacks: { Toyota: ['Corolla', 'Yaris'], Mazda: ['Mazda2', 'Mazda3'], Hyundai: ['i30', 'Getz'], Kia: ['Cerato', 'Picanto'], Volkswagen: ['Golf', 'Polo'], Suzuki: ['Swift'], Honda: ['Civic', 'Jazz'] },
};
export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: Number.isInteger(price) ? 0 : 2, maximumFractionDigits: 2 }).format(price);
}
