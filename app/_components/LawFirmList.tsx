import React, { useEffect, useState } from 'react'
import { LawFirmsInAbuja } from '../(data)/Templates'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import ReactPaginate from 'react-paginate';
import { MoveLeft, MoveRight } from 'lucide-react';

function LawFirmList() {

    const [searchInput, setSearchInput] = useState<string>()
    const [firmList, setFirmList] = useState(LawFirmsInAbuja)

    if (typeof window !== "undefined") {
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
        }, [searchInput])
    }

    const itemsPerPage = 12;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = firmList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(firmList.length / itemsPerPage);

    const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % firmList.length;
    setItemOffset(newOffset);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    // $('html, body').animate({ scrollTop: 0 }, 'fast');
  };

  return (
    <div>
        <div className='relative z-10 flex justify-center'>
            <input type='text' placeholder='Search by name or location of firm' className='bg-transparent w-full md:w-2/3 outline focus:outline-gold outline-1 h-10 rounded-lg pl-4 mb-10 text-lg' onChange={(event)=>setSearchInput(event.target.value)}/>
        </div>
        <div className='flex flex-wrap z-10 relative justify-center'>
            {currentItems && currentItems.map((firm, index) => (
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
                    <a href={`http://maps.google.com/?q=${firm.name}+${firm.address}`} target='_blank'><p className='small-gold line-clamp-1 text-center'>{firm.address}</p></a>
                    <a href={`tel:0${firm.number}`} target='_blank'><p className='small-gold line-clamp-1 text-center'>{`${firm.number===""?"":`0${firm.number}`}`}</p></a>
                    <a href={firm.website} target='_blank'><p className='small-gold text-center'>{`${firm.website===""?"":"visit website"}`}</p></a>
                </div>
            ))}
        </div>
        <div className='relative z-10 flex'>
            <ReactPaginate
                containerClassName={'pagination'}
                activeClassName={'item active '}
                breakLabel="..."
                nextLabel={<MoveRight />}
                nextClassName={'change-page'}
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                previousLabel={<MoveLeft  />}
                previousClassName={'change-page'}
                renderOnZeroPageCount={null}
                pageClassName={"page-item"}
            />
        </div>
    </div>
  )
}

export default LawFirmList