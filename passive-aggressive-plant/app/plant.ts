type Plant = {
    name: string;
    moistureMin: number;
    moistureMax: number;
    Nutrients: string;
    plantType: string;
    ph: number;
    currentMoisture: number;
    hardwareInfo: String;
}

function getCurrentMoisture(plant: Plant){
    // API call to the hardware would be here, but for now, random numbers
    plant.currentMoisture = Math.floor(Math.random() * (1000 - 250 + 1)) + 250;
}