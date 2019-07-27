import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = (props) =>{

const [searchInput, setSearchInput] = useState('');
const [gifs, setGifs] = useState([]);

useEffect(()=>{
  
},[])

const handleSearchChange = (e) =>{
  setSearchInput(e.target.value)
}

const handleButtonClick = async (e)=>{
  
 const gifs = await requestGifSearch(searchInput);
  setGifs(gifs);
}

    const requestGifSearch = async (query) => {
    const gifyKey = `r9hMgyPV21Nab7MC4iHXPv3peC12LwFW`;

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${gifyKey}&q=${query}`);
    const gifs = response.data.data;
    
    return gifs
  }


return (
        <>
          <h2>Gif Search</h2>
          <div className="input-group mb-3">
            <input type="text" value={searchInput} onChange={handleSearchChange} className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
          </div>
          <div className="row mt-4">
          {
            gifs.map((e, i) => {
              return (
                <div className='col-3' key={i}>
                  <img alt='' src={e.images.original.url} style={{ height: 'auto', width: '100%' }} />
                </div>
              )
            })
          }
          </div>
        </>
      )
}



export default App;







// class App extends React.Component {
// ​
//   state = {
//     searchInput: '',
//     gifs: []
//   }
// ​
//   async componentDidMount() {
//     const gifs = await this.requestGifSearch('kittens');
// ​
//     this.setState({gifs, searchInput: '' })
//   }
// ​
//   handleSearchChange = (e) => {
//     this.setState({ searchInput: e.target.value });
//   }
// ​
//   handleButtonClick = async (e) => {
//     const {searchInput} = this.state;
// ​
//     const gifs = await this.requestGifSearch(searchInput);
// ​
//     this.setState({gifs, searchInput: '' })
//   }
// ​
//   requestGifSearch = async (query) => {
//     const gifyKey = `r9hMgyPV21Nab7MC4iHXPv3peC12LwFW`;
// ​
//     const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${gifyKey}&q=${query}`);
//     const gifs = response.data.data;
    
//     return gifs
//   }
// ​
//   render() {
//     const {searchInput, gifs} = this.state;
// ​
//     return (
//       <>
//         <h2>Gif Search</h2>
//         <div className="input-group mb-3">
//           <input type="text" value={searchInput} onChange={this.handleSearchChange} className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
//           <div className="input-group-append">
//             <button onClick={this.handleButtonClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
//           </div>
//         </div>
//         <div className="row mt-4">
//           {
//             gifs.map((e, i) => {
//               return (
//                 <div className='col-3' key={i}>
//                   <img alt='' src={e.images.original.url} style={{ height: 'auto', width: '100%' }} />
//                 </div>
//               )
//             })
//           }
//         </div>
//       </>
//     )
//   }
// }
// ​
// export default App;