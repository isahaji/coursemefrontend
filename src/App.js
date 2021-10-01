import { useState, useEffect } from "react";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Cards from "./comp/Card";
// import StarIcon from '@mui/icons-material/Star';
import axios from "axios";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
import SearchIcon from '@mui/icons-material/Search';


// function Skel() {
//   return(
//     <div className="grid grid-cols-3 gap-3">
//     <Skeleton variant="rectangular" className="ml-6" width={300} height={400} />
//     <Skeleton variant="rectangular" className="ml-6" width={300} height={400} />
//     <Skeleton variant="rectangular" className="ml-6" width={300} height={400} />
//     <Skeleton variant="rectangular" className="ml-6" width={300} height={400} />
//     <Skeleton variant="rectangular" className="ml-6" width={300} height={400} />
//     <Skeleton variant="rectangular" className="ml-6" width={300} height={400} />
//     </div>
//   )
// }




function App() {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
  });
  const [card, setCard] = useState([]);
   const [data, setData] = useState(card);
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line
  const [rat, setRat] = useState("")
  // eslint-disable-next-line
  const [load,setLoad] = useState(true)



  useEffect(() => {
    async function fetchData() {
      const req = await instance.get("/cards");

      setCard(req.data);
    }

    fetchData();

    

  },);

useEffect(() => {
  let filteredData = card;
  /// SEARCH
if (searchTerm) {
    filteredData = filteredData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

//Rating

if (rat) {
  filteredData = filteredData.filter((item) => {
    return item.rating === rat
  })
  console.log(filteredData)
}

setData(filteredData)

}, [searchTerm,rat,card])


useEffect(() => {
  setTimeout(() => {
    setLoad(false)
  }, 3000);
})

  return (
    <div className="bg-white">
      <Header />
<div className=" flex justify-around items-center">
      <div className="flex items-center justify-center">
      <div className="mt-1">
        <input
          type="search"
          className="border-green-300  shadow rounded-md border-2 p-3"
          placeholder={`Search by name...`}
          value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <div className="mt-1 p-3">
        <div className="text-purple-lighter bg-green-300 p-3 rounded-xl text-white ring-2 focus:ring-offset-2 ring-green-400  cursor-pointer hover:bg-green-400  ">
        <SearchIcon></SearchIcon>
        </div>
        </div>
      </div>

      {/* <div className="">

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rat}
          label="Rating"
          onChange={(event) => setRat(event.target.value)}
          defaultValue={0}
        >
          <MenuItem value={1}>1 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={2}>2 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={3}>3 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={4}>4 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={5}>5 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
        </Select>
      </FormControl>
    </Box>


      </div> */}
      </div>
      <div className="grid mt-4 place-items-center w-screen align-middle  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-x-0">
        {searchTerm.length  >= 1 ? data.map((datas) => (
          <Cards
            key={datas._id}
            url={datas.url}
            title={datas.title}
            Desc={datas.Desc}
            link={datas.link}
            rating={datas.rating}

          />
        )): card.map((datas) => (
          <Cards
            key={datas._id}
            url={datas.url}
            title={datas.title}
            Desc={datas.Desc}
            link={datas.link}
            rating={datas.rating}
          />
        )) }
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}



export default App;


