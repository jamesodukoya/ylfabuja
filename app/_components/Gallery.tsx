import { MoveLeft, MoveRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { GalleryItems } from '../(data)/Templates';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function GalleryPage() {

    const itemsPerPage = 24;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = GalleryItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(GalleryItems.length / itemsPerPage);

    const currentGalleryItems = useRef<HTMLDivElement | null>(null);


    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % GalleryItems.length;
        setItemOffset(newOffset);
        currentGalleryItems.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // New gallery option
    const [images, setImages] = useState<{
        src: string;
        width: number;
        height: number;
        caption: string;
        alt: string;
    }[]>([])

    useEffect(() => {
        async function loadImages() {
            const promises = currentItems.map((item, index) => {
                return new Promise<{
                    index: number;
                    image: {
                        src: string;
                        width: number;
                        height: number;
                        caption: string;
                        alt: string;
                    }
                }>((resolve) => {
                    const img = new Image();
                    img.src = item.image;
                    img.onload = () => {
                        resolve({
                            index,
                            image: {
                                src: item.image,
                                width: img.width,
                                height: img.height,
                                caption: item.caption,
                                alt: item.caption,
                            },
                        });
                    };
                });
            });

            const results = await Promise.all(promises);

            // Sort results by index to ensure order
            const sortedImages = results
                .sort((a, b) => a.index - b.index)
                .map((result) => result.image);

            setImages(sortedImages);
        }

        loadImages();
    }, [itemOffset]);


    // Lightbox
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index: number, item: { src: string; width: number; height: number; caption: string; }) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);


    return (
        <div>
            <div ref={currentGalleryItems} className='relative z-10 xl:px-0 px-3 py-5'>
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                    rowHeight={250}
                />
                {!!currentImage && (
                    /* @ts-ignore */
                    <Lightbox
                        mainSrc={currentImage.src}
                        imageCaption={currentImage.caption}
                        mainSrcThumbnail={currentImage.src}
                        nextSrc={nextImage.src}
                        nextSrcThumbnail={nextImage.src}
                        prevSrc={prevImage.src}
                        prevSrcThumbnail={prevImage.src}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
            </div>
            <div className='relative z-10 flex pt-10'>
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
                    previousLabel={<MoveLeft />}
                    previousClassName={'change-page'}
                    renderOnZeroPageCount={null}
                    pageClassName={"page-item"}
                />
            </div>
        </div>
    )
}

export default GalleryPage