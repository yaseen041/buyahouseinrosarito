"use client"
import React from 'react'
import Footer from '../footer'
import Header3 from '../header3'
import CustomScript from '@/app/scripts'

const FaqComponent = () => {
    return (
        <>
            <div id="wrapper">
                {/* #page */}
                <div id="page" className="">
                    {/* header */}
                    <Header3 />
                    {/* /header */}
                    {/* main-content */}
                    <div className="main-content px-20 default">
                        <div className="space-20" />
                        {/* flat-title */}
                        <section className="flat-title inner-page">
                            <div className="cl-container full">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="content">
                                            <h2>Frequently asked questions</h2>
                                            <ul className="breadcrumbs">
                                                <li>
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li>/</li>
                                                <li>Frequently asked questions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /flat-title */}
                        {/* flat-question */}
                        <section className="tf-section flat-question style-1">
                            <div className="cl-container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section text-center">
                                            <h2 className="wow fadeInUp">Hove More Question?</h2>
                                            <div className="text wow fadeInUp">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="widget-tabs style-1">
                                            <ul className="widget-menu-tab wow fadeInUp">
                                                <li className="item-title">
                                                    <span className="inner">Home Buying</span>
                                                </li>
                                                <li className="item-title active">
                                                    <span className="inner">Home Selling</span>
                                                </li>
                                                <li className="item-title">
                                                    <span className="inner">Other</span>
                                                </li>
                                            </ul>
                                            <div className="widget-content-tab">
                                                <div className="widget-content-inner">
                                                    <div className="flat-accordion">
                                                        <div className="flat-toggle active">
                                                            <h4 className="toggle-title active">
                                                                What methods of payments are supported?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                Can I cancel at anytime?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                How do I get a receipt for my purchase?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                Which license do I need?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                How do I get access to a theme I purchased?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-inner active">
                                                    <div className="flat-accordion">
                                                        <div className="flat-toggle active wow fadeInUp">
                                                            <h4 className="toggle-title active">
                                                                What methods of payments are supported?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle wow fadeInUp">
                                                            <h4 className="toggle-title">
                                                                Can I cancel at anytime?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle wow fadeInUp">
                                                            <h4 className="toggle-title">
                                                                How do I get a receipt for my purchase?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle wow fadeInUp">
                                                            <h4 className="toggle-title">
                                                                Which license do I need?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle wow fadeInUp">
                                                            <h4 className="toggle-title">
                                                                How do I get access to a theme I purchased?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-inner">
                                                    <div className="flat-accordion">
                                                        <div className="flat-toggle active">
                                                            <h4 className="toggle-title active">
                                                                What methods of payments are supported?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                Can I cancel at anytime?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                How do I get a receipt for my purchase?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                Which license do I need?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flat-toggle">
                                                            <h4 className="toggle-title">
                                                                How do I get access to a theme I purchased?
                                                            </h4>
                                                            <div className="toggle-content">
                                                                <p>
                                                                    Cras vitae ac nunc orci. Purus amet tortor non at
                                                                    phasellus ultricies hendrerit. Eget a, sit morbi
                                                                    nunc sit id massa. Metus, scelerisque volutpat nec
                                                                    sit vel donec. Sagittis, id volutpat erat vel.{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /flat-question */}
                    </div>
                    {/* /main-content */}
                    {/* footer */}
                    <Footer />
                    {/* /footer */}
                </div>
                {/* /#page */}
            </div>
            <CustomScript src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
            <CustomScript src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
            <CustomScript src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
            <CustomScript src="/assets/js/main.js" />
        </>
    )
}

export default FaqComponent