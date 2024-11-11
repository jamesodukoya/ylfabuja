"use client"
import React, { useEffect } from 'react'
import Header from '../_components/Header'
import fjGallery from 'flickr-justified-gallery';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import { GalleryItems } from '../(data)/Templates';

function Gallery() {

    useEffect(() => {

        if (typeof document !== "undefined") {
    fjGallery(document.querySelectorAll('.gallery'), {
      itemSelector: '.gallery__item',
      rowHeight: 280,
      lastRow: 'start',
      gutter: 5,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });}
  }, []);

  return (
    <div className=''>
        <div className="relative z-10">
            <section className="soon bg-cover bg-center bg-fixed">
                <Header />
                <div className="xl:px-20 px-5 md:px-10 pt-28 min-h-[400px] flex items-center justify-center">
                    <div className='py-32 relative z-10'>
                        <h1 className='text-center'>Gallery</h1>
                    </div>
                </div>
            </section>
        </div>
        <div className='xl:px-20 px-5 md:px-10'>
            <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
        pager={true}
        thumbnail={true}
        galleryId={'nature'}
        autoplayFirstVideo={false}
        elementClassNames={'gallery'}
        mobileSettings={{
          controls: false,
          showCloseIcon: true,
          download: false,
          rotate: false,
        }}
      >
        {GalleryItems.map((photo, index)=>(
        <a
          key={index}
          data-lg-size="1600-2400"
        //   data-pinterest-text="Pin it2"
        //   data-tweet-text="lightGallery slide  2"
          className="gallery__item"
          data-src={photo.image}
          data-sub-html={`<h4>${photo.caption}</h4>`}
        >
          <img
            className="img-responsive"
            src={photo.thumbnail}
          />
        </a>
        ))}
      </LightGallery>
        </div>
    </div>
  )
}

export default Gallery