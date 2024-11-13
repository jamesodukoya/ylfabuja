"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from '../_components/Header'
import fjGallery from 'flickr-justified-gallery';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import { GalleryItems } from '../(data)/Templates';
import Script from 'next/script';

function Gallery() {

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
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/flickr-justified-gallery@2.1/dist/fjGallery.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly`)
        }>
      </Script> */}
      <Script src='/fjGallery.js'></Script>
    </div>
  )
}

export default Gallery