class employee{
    constructor(){
        this.id = 91;
        this.name="vishal"
    }

    displayinfo(){
        console.log(this.id+" "+this.name)
    }
}

let emp=new employee();
emp.displayinfo()