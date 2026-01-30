const t = 3;

const host = document.getElementById('host') as HTMLDivElement;

console.log(t)

const Main = function(document:Window, host:HTMLInputElement ) {

    // document.addEventListener('keydown', (evt: KeyboardEvent)=>{
    //     console.log(`From Document: ${evt.key}`);
    // })

    console.log(host);
    host.addEventListener('keydown', (evt: KeyboardEvent) => {

        console.log(`From Input: ${evt.key}`);
    })
}


export default Main;