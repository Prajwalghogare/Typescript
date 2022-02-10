class mobile{
    protected name: string
    protected brand: string
    protected RAM: number

    constructor(name : string, brand : string, RAM : number){
        this.name = name
        this.brand = brand
        this.RAM = RAM
    
    }
 
    //Setters

    setName(name: string): void{
        this.name = name
    }
    setBrand(brand : string):void{
        this.brand = brand
    }
    setRAM(RAM : number):void{
        this.RAM = RAM
    }

    //Getters

    getName():string{
        return this.name
    }

    getBrand():string{
        return this.brand
    }

    getRAM():number{
        return this.RAM
    }
    
}

const m1 = new mobile('Nord','Oneplus', 8)

console.log(`Name = ${m1.getName()}`)