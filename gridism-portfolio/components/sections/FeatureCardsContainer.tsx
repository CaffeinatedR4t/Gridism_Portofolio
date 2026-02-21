"use client";

import FeatureCardSection from "./FeatureCardSection";

const FeatureCardsContainer = () => {
  // All feature card data here (moved from page.tsx)
  const transparentWorkflowImages = [
    { src: "/images/placeholder1.jpg", alt: "Image 1", width: 490, height: 333 },
    { src: "/images/placeholder2.jpg", alt: "Image 2", width: 442, height: 336 },
    { src: "/images/placeholder3.jpg", alt: "Image 3", width: 587, height: 335 },
    { src: "/images/placeholder4.jpg", alt: "Image 4", width: 466, height: 338 },
    { src: "/images/placeholder5.jpg", alt: "Image 5", width: 312, height: 337 },
  ];

  const strategicResultsImages = [
    { src: "/images/EZZRALE 02 11.png", alt: "EZZRALE", width: 811, height: 569 },
    { src: "/images/Ogohogoh 06 11.png", alt: "Ogohogoh", width: 804, height: 568 },
    { src: "/images/iJakarta 05 3.png", alt: "iJakarta", width: 805, height: 569 },
  ];

  const scalableTechImages = [
    { src: "/images/envato-labs-image-edit - 2026-02-03T165127.390.png", alt: "Image 1", width: 574, height: 574 },
    { src: "/images/903bd99a-d751-4420-982c-4fcdf1ff93f2.png", alt: "Image 2", width: 377, height: 565 },
    { src: "/images/image-gen (24)ffh.png", alt: "Image 3", width: 1020, height: 574 },
    { src: "/images/portrait-fashion-and-a-woman-on-a-chair-in-studio-2026-01-09-11-02-50-utc.jpg", alt: "Image 4", width: 743, height: 557 },
    { src: "/images/placeholder10.jpg", alt: "Image 5", width: 554, height: 554 },
    { src: "/images/close-up-black-and-white-shot-portrait-2026-01-07-06-57-46-utc.jpg", alt: "Image 6", width: 833, height: 556 },
  ];

  return (
    <>
      <FeatureCardSection
        number="01"
        title="TRANSPARENT WORKFLOW"
        subtitle="Clear Scope"
        description="We deliver clear scope, transparent investment, and measurable progress through structured milestones—ensuring focused execution, strategic value, and complete visibility."
        images={transparentWorkflowImages}
        chessPiece="/images/Salinan Kuda png.png"
        chessPieceSize={{ width: 103, height: 213 }}
      />
      
      <FeatureCardSection
        number="02"
        title="STRATEGIC RESULTS ORIENTED"
        subtitle="Clear identity."
        description="We are strategic and results-oriented, focusing on outcomes over rituals by starting with fast, AI-assisted prototyping to surface real problems early. Through sharp decisions and meticulous craft microcopy, spacing, motion, complete UI states, and polish passes. we deliver premium, ship-ready experiences that drive real ROI, with a flexible process but consistently high impact."
        images={strategicResultsImages}
        chessPiece="/images/Salinan luncur png.png"
        chessPieceSize={{ width: 128, height: 214 }}
      />
      
      <FeatureCardSection
        number="03"
        title="SCALABLE TECHNOLOGY"
        subtitle="Clear Quality"
        description="We use AI technology system to accelerate processes so we can focus fully on refining prototypes, combining AI technology and design into one unified system. Our approach is human–technology, AI-centric—where efficiency is powered by AI, but vision and meaning remain human, reflected across our website, branding, and every experience we create."
        images={scalableTechImages}
        chessPiece="/images/Salinan Benteng png.png"
        chessPieceSize={{ width: 115, height: 213 }}
      />
    </>
  );
};

export default FeatureCardsContainer;