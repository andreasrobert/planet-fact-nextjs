export const setRocket = (planet:string) =>{
    return{
        type: "CHANGECOURSE",
        destination: planet
    }
}