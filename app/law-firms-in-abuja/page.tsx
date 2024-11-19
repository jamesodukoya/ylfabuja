"use client"
import React, { useEffect, useState } from 'react'
import Header from '../_components/Header'
import { Executives, LawFirmsInAbuja } from '../(data)/Templates'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

// function PaginatedItems({ itemsPerPage }) {
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   // Simulate fetching items from another resources.
//   // (This could be items from props; or items loaded in a local state
//   // from an API endpoint with useEffect and useState)
//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

function LawFirms() {

    const geo = [51.505, -0.09]

    const [searchInput, setSearchInput] = useState<string>()
    const [firmList, setFirmList] = useState(LawFirmsInAbuja)

    useEffect(() => {
        if (searchInput) {
            const filterData = LawFirmsInAbuja.filter(
                firm => firm.name.toLowerCase().includes(searchInput.toLowerCase()) || firm.address.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFirmList(filterData)
        }
        else {
            setFirmList(LawFirmsInAbuja)
        }
    },[searchInput])

  return (
    <div>
        <div className="relative z-10">
            <section className="exec bg-cover min-h-screen bg-center bg-fixed">
                <Header />
                <div className="xl:px-20 pt-28 px-5 md:px-10">
                    <div className='flex justify-center'>
                        <h1 className='lg:py-32 py-20 z-10 text-center'> Law Firms in Abuja</h1>
                    </div>
                    <div className='relative z-10 flex justify-center'>
                        <input type='text' placeholder='Search by name or location of firm' className='bg-transparent w-full md:w-2/3 outline focus:outline-gold outline-1 h-10 rounded-lg pl-4 mb-10 text-lg' onChange={(event)=>setSearchInput(event.target.value)}/>
                    </div>
                    
                    <div className='flex flex-wrap z-10 relative justify-center'>
                        {firmList.map((firm, index) => (
                            <div key={index} className='flex flex-col flex-wrap items-center xl:w-[calc(33.3333%-12px)] md:w-[calc(50%-12px)] w-full mb-10 mr-3'>
                                <div className=''>
                                    <MapContainer
                                        center={firm.geocode}
                                        zoom={13}
                                        scrollWheelZoom={false}
                                    >
                                        <TileLayer
                                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={firm.geocode}>
                                          <Popup>
                                            {firm.address}
                                          </Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>
                                <h3 className='mt-5 line-clamp-1 text-center'>{firm.name}</h3>
                                <a href={`http://maps.google.com/?q=${firm.address}`} target='_blank'><p className='small-gold line-clamp-1 text-center'>{firm.address}</p></a>
                                <a href={`tel:0${firm.number}`} target='_blank'><p className='small-gold line-clamp-1 text-center'>{`${firm.number===""?"":`0${firm.number}`}`}</p></a>
                                <a href={firm.website} target='_blank'><p className='small-gold text-center'>{`${firm.website===""?"":"visit website"}`}</p></a>
                                {/* <p className='small-gold text-center'>{firm.website}</p> */}
                                {/* <img height={200} width={200} src={`${exec.picture}`} alt={`${exec.name} ${exec.office}`} className='rounded-full' />
                                <h3 className='text-center mt-10'>{exec.name}</h3>
                                <p className='small-gold text-center'>{exec.office}</p> */}
                            </div>
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default LawFirms