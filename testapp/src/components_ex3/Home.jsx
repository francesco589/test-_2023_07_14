export default function Home(props){
    


    return(
        <div className="flex gap-2 flex-wrap justify-center w-screen h-screen ">
        {props.characters.map((el,i) => {
            return(
                <div className=" rounded-xl bg-slate-500 w-56  flex flex-col gap-8 items-center p-3"  key={i}><img className="w-42" src={el.img} alt={el.name} /> <span className="font-bold text-2xl">{el.name}</span> <button className="bg-blue-300 p-4 rounded-xl hover:bg-blue-500 font-semibold">Altro</button> </div>
             )})}
        </div>
    )
}