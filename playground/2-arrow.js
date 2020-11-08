const event={
    
    name: "Birthday party",
    Guestlist:['Andrew','Jen','Mike'],
    printGuestlist(){
        console.log("Guest list for",this.name)
        this.Guestlist.forEach((guest)=>{
            console.log(guest,this.name)
        })
    }

}
event.printGuestlist()