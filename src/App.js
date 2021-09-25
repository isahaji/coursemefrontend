import { useState, useEffect } from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Cards from './comp/Card';
import axios from 'axios';
// import Card2 from './Card2';



function App() {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
})
  const [card, setCard] = useState([]);

    useEffect(()=> {
        async function fetchData() {
          const req = await instance.get("/cards")

          setCard(req.data);
        }

        fetchData();
    }, [instance])




  return (

    <div>
    <Header/>
    <div className="mt-24 pl-14 pr-14 mb-6 gap-3 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 " >

  {card.map((datas) => (
          <Cards
            key={datas._id}
            url={datas.url}
            title={datas.title}
            Desc={datas.Desc}
            link={datas.link}
          />
        ))} 


    </div>

<button  className="flex bg-green-500 p-2 m-8 rounded-xl text-white hover:bg-green-600 ring-2 ring-green-500 focus:ring-offset-2"> OK <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg></button> 

    <div className=" pt-28">
    <Footer />  
    </div>

  
    </div>
  );
}

export default App;


